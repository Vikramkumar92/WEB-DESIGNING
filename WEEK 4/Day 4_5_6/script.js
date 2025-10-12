// Three.js Setup
window.onload = function() {
    initThree();
    initMap();

    // Set minimum date
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('travel-date').setAttribute('min', today);
    document.getElementById('travel-date').value = today;
};
let scene, camera, renderer, particles;

function initThree() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 100;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.6
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const planeGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 8);
    const planeMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        wireframe: true,
        transparent: true,
        opacity: 0.3
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.z = Math.PI / 2;
    scene.add(plane);

    camera.position.z = 30;

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.y += 0.001;
        particles.rotation.x += 0.0005;
        plane.rotation.x += 0.01;
        plane.position.x = Math.sin(Date.now() * 0.001) * 10;
        plane.position.y = Math.cos(Date.now() * 0.001) * 10;
        renderer.render(scene, camera);
    }
    animate();
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Map ---
let map = null;
let routeLayer = null;

function initMap() {
    map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const placeholder = document.querySelector('.map-placeholder');
    if (placeholder) placeholder.style.display = 'none';
}

async function geocodeLocation(locationName) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`);
        const data = await res.json();
        if (data && data.length > 0) {
            return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon), name: data[0].display_name };
        } else throw new Error('Location not found');
    } catch (err) {
        console.error('Geocoding error:', err);
        return { lat: 0, lng: 0, name: locationName };
    }
}

async function calculateRoute(origin, destination, travelMode) {
    if (routeLayer) map.removeLayer(routeLayer);
    const originCoords = await geocodeLocation(origin);
    const destCoords = await geocodeLocation(destination);

    L.marker([originCoords.lat, originCoords.lng]).addTo(map).bindPopup(`<b>Origin:</b> ${originCoords.name}`);
    L.marker([destCoords.lat, destCoords.lng]).addTo(map).bindPopup(`<b>Destination:</b> ${destCoords.name}`);

    routeLayer = L.polyline([[originCoords.lat, originCoords.lng], [destCoords.lat, destCoords.lng]], {
        color: '#667eea', weight: 5, opacity: 0.7, dashArray: '10, 10'
    }).addTo(map);

    const bounds = L.latLngBounds([[originCoords.lat, originCoords.lng], [destCoords.lat, destCoords.lng]]);
    map.fitBounds(bounds, { padding: [20, 20] });

    const distance = calculateDistance(originCoords.lat, originCoords.lng, destCoords.lat, destCoords.lng);
    const time = calculateEstimatedTime(distance, travelMode);
    return { distance, time };
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
}