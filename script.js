/**
 * PawMatch - Full Pet Matrimony Application Logic
 * Featuring: Explore Directory, Matchmaking swipe deck, Shortlisting,
 * Direct Phone/Email/WhatsApp contact modals, and Real-time messaging simulation.
 */

// Default Dataset of Eligible Pet Matrimonial Profiles
const INITIAL_PETS = [
  {
    id: "pet-1",
    name: "Luna Bell",
    species: "Dog",
    breed: "Samoyed",
    gender: "Female",
    age: "2.5 yrs",
    weight: "22 kg",
    location: "Los Angeles, CA",
    compatibility: 98,
    pedigree: "AKC Champion Bloodline",
    vaccinated: true,
    temperament: ["Gentle", "Smiley", "Well Socialized", "Loves Outdoors"],
    bio: "Luna is a stunning snow-white purebred Samoyed with a playful soul and an award-winning lineage. Looking for a healthy, purebred male Samoyed or Golden Retriever with verified health checks for a lovely family mating alliance.",
    image: "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Dr. Evelyn Vance",
      phone: "+1 (310) 849-2144",
      email: "evelyn.vance@petparents.org",
      whatsapp: "13108492144",
      verified: true
    }
  },
  {
    id: "pet-2",
    name: "Duke of Sterling",
    species: "Dog",
    breed: "Golden Retriever",
    gender: "Male",
    age: "3.0 yrs",
    weight: "32 kg",
    location: "Austin, TX",
    compatibility: 95,
    pedigree: "AKC Master Hunter Line",
    vaccinated: true,
    temperament: ["Loyal", "Eager to Please", "Athletic", "Loves Water"],
    bio: "Duke is a champion field retriever with exceptional hip & elbow OFA clearances. Calm inside the home, highly energetic in parks. Looking for a graceful, registered Golden lady for spring matrimonial pairing.",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Marcus Holloway",
      phone: "+1 (512) 773-9021",
      email: "marcus.holloway@texaspets.io",
      whatsapp: "15127739021",
      verified: true
    }
  },
  {
    id: "pet-3",
    name: "Princess Cleo",
    species: "Cat",
    breed: "Persian",
    gender: "Female",
    age: "2.0 yrs",
    weight: "4.2 kg",
    location: "New York, NY",
    compatibility: 94,
    pedigree: "CFA Registered Grand Champion Ancestry",
    vaccinated: true,
    temperament: ["Cuddle Bug", "Quiet", "Aristocratic", "Indoor Queen"],
    bio: "Cleo is a doll-faced silver chinchilla Persian with emerald green eyes. Completely pampered, PKD tested negative. Seeking an affectionate, purebred male Persian partner for ethical breeding.",
    image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Sophia Kensington",
      phone: "+1 (212) 993-4412",
      email: "sophia.k@kensingtongrooming.com",
      whatsapp: "12129934412",
      verified: true
    }
  },
  {
    id: "pet-4",
    name: "Thorin Oakenshield",
    species: "Dog",
    breed: "Siberian Husky",
    gender: "Male",
    age: "3.5 yrs",
    weight: "27 kg",
    location: "Seattle, WA",
    compatibility: 91,
    pedigree: "KCI / AKC Certified Dual Pedigree",
    vaccinated: true,
    temperament: ["Vocal Singer", "Adventurous", "Charismatic", "Friendly"],
    bio: "Thorin has striking bi-colored eyes (one icy blue, one warm amber) and a pristine silver-grey coat. Loves hiking trails. Seeking an energetic Husky bride with verified lineage.",
    image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Alexander Reed",
      phone: "+1 (206) 554-1890",
      email: "alexander.reed@pnwpaws.com",
      whatsapp: "12065541890",
      verified: true
    }
  },
  {
    id: "pet-5",
    name: "Coco Chanel",
    species: "Dog",
    breed: "French Bulldog",
    gender: "Female",
    age: "2.2 yrs",
    weight: "11 kg",
    location: "Miami, FL",
    compatibility: 96,
    pedigree: "AKC Pedigree (Lilac & Tan)",
    vaccinated: true,
    temperament: ["Affectionate", "Comical", "Chill", "Loves Naptime"],
    bio: "Coco is a miniature bundle of pure joy. Certified breathing airway clearance, healthy respiratory profile, no allergies. Seeking a handsome Frenchie groom for companionship and progeny.",
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Mateo Rodriguez",
      phone: "+1 (305) 612-8840",
      email: "mateo.r@miamibulldogs.net",
      whatsapp: "13056128840",
      verified: true
    }
  },
  {
    id: "pet-6",
    name: "Lord Oliver",
    species: "Cat",
    breed: "British Shorthair",
    gender: "Male",
    age: "2.8 yrs",
    weight: "6.1 kg",
    location: "Chicago, IL",
    compatibility: 92,
    pedigree: "TICA Registered Blue Champion",
    vaccinated: true,
    temperament: ["Gentleman", "Placid", "Observant", "Fluffy Chonker"],
    bio: "Oliver has chubby round cheeks and a dense velvet plush blue coat. Super chilled personality, loves gazing out high windows. Searching for a pedigreed British Shorthair or Scottish Fold bride.",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Clara Davenport",
      phone: "+1 (312) 480-9923",
      email: "clara.d@midwestfelines.com",
      whatsapp: "13124809923",
      verified: true
    }
  },
  {
    id: "pet-7",
    name: "Bella Rose",
    species: "Dog",
    breed: "Pomeranian",
    gender: "Female",
    age: "1.8 yrs",
    weight: "3.5 kg",
    location: "Los Angeles, CA",
    compatibility: 89,
    pedigree: "Teacup Purebred Registered",
    vaccinated: true,
    temperament: ["Spirited", "Smart", "Fluffy Cloud", "Loving"],
    bio: "Bella is a tiny teddy bear faced orange sable Pomeranian. Very loving and agile. Looking for a gentle and loving male Pomeranian for matrimonial pairing.",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "Jessica Hayes",
      phone: "+1 (310) 902-1488",
      email: "jessica.h@lalovespets.org",
      whatsapp: "13109021488",
      verified: true
    }
  },
  {
    id: "pet-8",
    name: "Simba the Regal",
    species: "Dog",
    breed: "German Shepherd",
    gender: "Male",
    age: "3.2 yrs",
    weight: "36 kg",
    location: "Austin, TX",
    compatibility: 93,
    pedigree: "SV German Lineage Pedigree",
    vaccinated: true,
    temperament: ["Protective", "Sharp Intellect", "Obedient", "Gentle Giant"],
    bio: "Simba is a majestic straight-backed German Shepherd trained in advanced obedience. Excellent companion guardian. Looking for a qualified female GSD with top health scores.",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=800&q=80",
    owner: {
      name: "David Kim",
      phone: "+1 (512) 640-3312",
      email: "david.kim@k9companions.com",
      whatsapp: "15126403312",
      verified: true
    }
  }
];

// In-Memory Storage / Local State
let petsData = [];
let shortlistedPetIds = new Set();
let activeSwipeIndex = 0;
let currentQuickContactPet = null;
let activeChatPetId = null;

// Simulated Messages Store
let chatHistory = {
  "pet-1": [
    { sender: "them", text: "Hello! We saw Milo's profile on PawMatch. He looks very regal!", time: "10:15 AM" },
    { sender: "me", text: "Thank you Dr. Vance! Luna is breathtaking. We are definitely looking for a mate with good OFA clearance.", time: "10:18 AM" }
  ],
  "pet-2": [
    { sender: "them", text: "Hi there! Duke's parent here. Happy to share AKC paperwork whenever you are ready.", time: "Yesterday" }
  ]
};

// Application Initialization
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  populateBreedFilter();
  renderGrid(petsData);
  initSwipeDeck();
  renderShortlist();
  renderConversationsSidebar();
  updateUnreadCount();
  setupDragAndDropUpload();
});

// Load pets from localStorage or defaults
function loadData() {
  const saved = localStorage.getItem("pawmatch_pets");
  if (saved) {
    try {
      petsData = JSON.parse(saved);
    } catch (e) {
      petsData = [...INITIAL_PETS];
    }
  } else {
    petsData = [...INITIAL_PETS];
    saveData();
  }

  const savedShortlist = localStorage.getItem("pawmatch_shortlist");
  if (savedShortlist) {
    try {
      shortlistedPetIds = new Set(JSON.parse(savedShortlist));
    } catch (e) {
      shortlistedPetIds = new Set();
    }
  }
  updateShortlistCounter();
}

function saveData() {
  localStorage.setItem("pawmatch_pets", JSON.stringify(petsData));
}

function saveShortlist() {
  localStorage.setItem("pawmatch_shortlist", JSON.stringify(Array.from(shortlistedPetIds)));
  updateShortlistCounter();
}

function updateShortlistCounter() {
  const el = document.getElementById("shortlist-count");
  if (el) el.innerText = shortlistedPetIds.size;
}

// Navigation View Switcher
function switchView(viewId) {
  // Update nav buttons
  document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
  const activeBtn = document.getElementById(`nav-${viewId}`);
  if (activeBtn) activeBtn.classList.add("active");

  // Update views
  document.querySelectorAll(".app-view").forEach(view => view.classList.remove("active"));
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) targetView.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (viewId === "saved") {
    renderShortlist();
  } else if (viewId === "tinder") {
    initSwipeDeck();
  }
}

// Populate Breeds in Filter Dropdown dynamically
function populateBreedFilter() {
  const breedSelect = document.getElementById("filter-breed");
  const breeds = Array.from(new Set(petsData.map(p => p.breed))).sort();
  breedSelect.innerHTML = `<option value="all">All Breeds (${breeds.length})</option>`;
  breeds.forEach(b => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    breedSelect.appendChild(opt);
  });
}

// Render the Pet Grid in Explore Mode
function renderGrid(petsToRender) {
  const grid = document.getElementById("pets-grid");
  const countEl = document.getElementById("filtered-count");
  if (countEl) countEl.innerText = petsToRender.length;

  if (petsToRender.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <i class="fa-solid fa-paw" style="font-size: 3.5rem; color: var(--purple-light); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--purple-deep); font-size: 1.4rem;">No matching pet profiles found</h3>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">Try relaxing your filters or check all cities to see more partners.</p>
        <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = petsToRender.map(pet => {
    const isSaved = shortlistedPetIds.has(pet.id);
    const genderClass = pet.gender.toLowerCase() === "female" ? "female" : "male";
    const genderIcon = pet.gender.toLowerCase() === "female" ? "venus" : "mars";
    const tagsHtml = pet.temperament.slice(0, 3).map(t => `<span class="pet-tag">${escapeHtml(t)}</span>`).join("");

    return `
      <article class="pet-card" id="card-${pet.id}">
        <div class="pet-card-image-wrap">
          <img src="${pet.image}" alt="${escapeHtml(pet.name)}" class="pet-card-img" loading="lazy">
          <div class="card-badge-gender ${genderClass}">
            <i class="fa-solid fa-${genderIcon}"></i> ${escapeHtml(pet.gender)}
          </div>
          <div class="card-compat-badge">
            <i class="fa-solid fa-heart"></i> ${pet.compatibility}% Match
          </div>
          <button class="card-favorite-btn ${isSaved ? 'favorited' : ''}" 
                  title="${isSaved ? 'Remove from shortlist' : 'Shortlist pet'}"
                  onclick="toggleShortlist('${pet.id}', event)">
            <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart"></i>
          </button>
        </div>

        <div class="pet-card-body">
          <div class="pet-card-header">
            <h3 class="pet-card-name">${escapeHtml(pet.name)}</h3>
            <span class="pet-card-age">${escapeHtml(pet.age)}</span>
          </div>

          <div class="pet-card-breed">${escapeHtml(pet.breed)}</div>

          <div class="pet-card-meta">
            <span><i class="fa-solid fa-location-dot"></i> ${escapeHtml(pet.location)}</span>
            <span><i class="fa-solid fa-weight-hanging"></i> ${escapeHtml(pet.weight || 'N/A')}</span>
            <span><i class="fa-solid fa-shield-heart"></i> ${pet.vaccinated ? 'Vaccinated' : 'Pending'}</span>
          </div>

          <div class="pet-tags">${tagsHtml}</div>

          <div class="pet-card-owner-snippet">
            <div>
              <div class="owner-title">Pet Parent</div>
              <div class="owner-name">${escapeHtml(pet.owner.name)}</div>
            </div>
            ${pet.owner.verified ? `
              <div class="owner-verified-badge" title="Phone & Identity Verified">
                <i class="fa-solid fa-circle-check"></i> Verified
              </div>
            ` : ''}
          </div>

          <div class="pet-card-footer">
            <button class="btn-card-bio" onclick="openPetModal('${pet.id}')">
              <i class="fa-solid fa-file-lines"></i> Matrimony Bio
            </button>
            <button class="btn-card-contact" onclick="openQuickContact('${pet.id}')">
              <i class="fa-solid fa-phone-volume"></i> Contact Owner
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// Search and Filter logic
function applyFilters() {
  const species = document.getElementById("filter-species").value;
  const gender = document.getElementById("filter-gender").value;
  const breed = document.getElementById("filter-breed").value;
  const city = document.getElementById("filter-city").value;
  const sortBy = document.getElementById("sort-select").value;

  let results = petsData.filter(pet => {
    if (species !== "all" && pet.species.toLowerCase() !== species.toLowerCase()) return false;
    if (gender !== "all" && pet.gender.toLowerCase() !== gender.toLowerCase()) return false;
    if (breed !== "all" && pet.breed.toLowerCase() !== breed.toLowerCase()) return false;
    if (city !== "all" && !pet.location.toLowerCase().includes(city.toLowerCase())) return false;
    return true;
  });

  // Sorting
  if (sortBy === "recommended") {
    results.sort((a, b) => b.compatibility - a.compatibility);
  } else if (sortBy === "age-asc") {
    results.sort((a, b) => parseFloat(a.age) - parseFloat(b.age));
  } else if (sortBy === "age-desc") {
    results.sort((a, b) => parseFloat(b.age) - parseFloat(a.age));
  } else if (sortBy === "name") {
    results.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderGrid(results);
}

function resetFilters() {
  document.getElementById("filter-species").value = "all";
  document.getElementById("filter-gender").value = "all";
  document.getElementById("filter-breed").value = "all";
  document.getElementById("filter-city").value = "all";
  document.getElementById("sort-select").value = "recommended";
  renderGrid(petsData);
  showToast("Filters reset to default view.", "info");
}

function filterBySpecies(sp) {
  switchView('explore');
  document.getElementById("filter-species").value = sp;
  applyFilters();
}

// Shortlisting functionality
function toggleShortlist(petId, event) {
  if (event) event.stopPropagation();

  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  if (shortlistedPetIds.has(petId)) {
    shortlistedPetIds.delete(petId);
    showToast(`Removed ${pet.name} from your shortlist.`, "info");
  } else {
    shortlistedPetIds.add(petId);
    showToast(`Added ${pet.name} to your shortlisted partners!`, "heart");
  }

  saveShortlist();
  applyFilters();
  renderShortlist();
}

function renderShortlist() {
  const container = document.getElementById("saved-grid");
  const emptyState = document.getElementById("saved-empty");
  const savedPets = petsData.filter(p => shortlistedPetIds.has(p.id));

  if (savedPets.length === 0) {
    container.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  container.innerHTML = savedPets.map(pet => {
    return `
      <article class="pet-card">
        <div class="pet-card-image-wrap">
          <img src="${pet.image}" alt="${escapeHtml(pet.name)}" class="pet-card-img">
          <div class="card-badge-gender ${pet.gender.toLowerCase()}">
            ${escapeHtml(pet.gender)}
          </div>
          <button class="card-favorite-btn favorited" title="Remove" onclick="toggleShortlist('${pet.id}', event)">
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>
        <div class="pet-card-body">
          <div class="pet-card-header">
            <h3 class="pet-card-name">${escapeHtml(pet.name)}</h3>
            <span class="pet-card-age">${escapeHtml(pet.age)}</span>
          </div>
          <div class="pet-card-breed">${escapeHtml(pet.breed)} • ${escapeHtml(pet.location)}</div>
          
          <div class="pet-card-owner-snippet" style="margin-top:0.8rem;">
            <div>
              <div class="owner-title">Contact Parent</div>
              <div class="owner-name">${escapeHtml(pet.owner.name)}</div>
            </div>
            <a href="tel:${pet.owner.phone}" class="btn-icon" style="width:34px; height:34px; font-size:0.9rem;" title="Call">
              <i class="fa-solid fa-phone"></i>
            </a>
          </div>

          <div class="pet-card-footer" style="margin-top:0.8rem;">
            <button class="btn-card-bio" onclick="openPetModal('${pet.id}')">View Details</button>
            <button class="btn-card-contact" onclick="openQuickContact('${pet.id}')">Contact Options</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function clearShortlist() {
  if (shortlistedPetIds.size === 0) return;
  if (confirm("Are you sure you want to clear your shortlisted pets?")) {
    shortlistedPetIds.clear();
    saveShortlist();
    renderShortlist();
    applyFilters();
    showToast("Shortlist cleared.", "info");
  }
}

// Tinder / Paw-Swipe Deck Implementation
function initSwipeDeck() {
  const deck = document.getElementById("swipe-deck");
  const emptyEl = document.getElementById("deck-empty");
  const controlsEl = document.getElementById("swipe-controls");

  if (activeSwipeIndex >= petsData.length) {
    deck.innerHTML = "";
    deck.appendChild(emptyEl);
    emptyEl.style.display = "flex";
    controlsEl.style.display = "none";
    return;
  }

  emptyEl.style.display = "none";
  controlsEl.style.display = "flex";

  const currentPet = petsData[activeSwipeIndex];
  deck.innerHTML = `
    <div class="swipe-card" id="active-swipe-card">
      <div class="swipe-card-img-wrap">
        <img src="${currentPet.image}" alt="${escapeHtml(currentPet.name)}" class="swipe-card-img">
        <div class="card-badge-gender ${currentPet.gender.toLowerCase()}" style="position: absolute; top: 1.2rem; left: 1.2rem;">
          ${escapeHtml(currentPet.gender)} • ${currentPet.breed}
        </div>
        <div class="card-compat-badge" style="position: absolute; top: 1.2rem; right: 1.2rem;">
          <i class="fa-solid fa-heart"></i> ${currentPet.compatibility}% Match
        </div>
        <div class="swipe-card-overlay">
          <div class="swipe-hero-text">
            <h3>${escapeHtml(currentPet.name)}, ${escapeHtml(currentPet.age)}</h3>
            <p><i class="fa-solid fa-location-dot"></i> ${escapeHtml(currentPet.location)} • ${escapeHtml(currentPet.pedigree)}</p>
          </div>
        </div>
      </div>
      <div class="swipe-card-details">
        <div class="swipe-bio-snippet">"${escapeHtml(currentPet.bio)}"</div>
        <div class="pet-tags">
          ${currentPet.temperament.map(t => `<span class="pet-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
        <div class="pet-card-owner-snippet" style="margin-bottom:0;">
          <div>
            <div class="owner-title">Owner Contact Ready</div>
            <div class="owner-name">${escapeHtml(currentPet.owner.name)} (${escapeHtml(currentPet.owner.phone)})</div>
          </div>
          <button class="btn btn-outline-sm" onclick="openQuickContact('${currentPet.id}')">
            <i class="fa-solid fa-bolt"></i> Instant Contact
          </button>
        </div>
      </div>
    </div>
  `;
}

function swipeAction(direction) {
  const card = document.getElementById("active-swipe-card");
  if (!card) return;

  const currentPet = petsData[activeSwipeIndex];

  if (direction === "right") {
    card.style.transform = "translateX(500px) rotate(30deg)";
    card.style.opacity = "0";
    shortlistedPetIds.add(currentPet.id);
    saveShortlist();
    showToast(`You matched with ${currentPet.name}! Shortlisted for marriage proposal.`, "heart");
  } else {
    card.style.transform = "translateX(-500px) rotate(-30deg)";
    card.style.opacity = "0";
  }

  setTimeout(() => {
    activeSwipeIndex++;
    initSwipeDeck();
  }, 350);
}

function openCurrentSwipeModal() {
  if (activeSwipeIndex < petsData.length) {
    openPetModal(petsData[activeSwipeIndex].id);
  }
}

function resetDeck() {
  activeSwipeIndex = 0;
  initSwipeDeck();
}

// Detailed Pet Matrimonial Profile Modal
function openPetModal(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  const modalBody = document.getElementById("modal-profile-body");
  const isSaved = shortlistedPetIds.has(pet.id);

  modalBody.innerHTML = `
    <div class="profile-modal-grid">
      <div class="modal-pet-gallery">
        <img src="${pet.image}" alt="${escapeHtml(pet.name)}" class="modal-pet-img">
        <div style="margin-top: 1rem; display: flex; gap: 0.5rem;">
          <button class="btn btn-outline btn-block" onclick="toggleShortlist('${pet.id}'); openPetModal('${pet.id}')">
            <i class="fa-${isSaved ? 'solid' : 'regular'} fa-heart" style="color:var(--pink-accent)"></i> 
            ${isSaved ? 'Shortlisted' : 'Add to Shortlist'}
          </button>
        </div>
      </div>

      <div class="profile-modal-info">
        <div class="modal-pet-title-row">
          <div>
            <span class="modal-badge"><i class="fa-solid fa-ring"></i> Matrimonial Candidate</span>
            <h2 class="modal-pet-name">${escapeHtml(pet.name)}</h2>
            <div class="modal-pet-subtitle">${escapeHtml(pet.breed)} • ${escapeHtml(pet.gender)} (Age: ${escapeHtml(pet.age)})</div>
          </div>
          <div class="card-compat-badge" style="position:static; font-size: 0.95rem; padding: 0.5rem 1rem;">
            <i class="fa-solid fa-heart"></i> ${pet.compatibility}% Compatible
          </div>
        </div>

        <div>
          <h4 style="font-size: 0.85rem; color: var(--purple-deep); text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.5px;">About My Furry Baby</h4>
          <p style="color: var(--text-dark); line-height: 1.6; font-size: 0.95rem;">${escapeHtml(pet.bio)}</p>
        </div>

        <div class="matrimony-specs-grid">
          <div class="spec-cell">
            <span class="spec-title">Location / City</span>
            <span class="spec-value">${escapeHtml(pet.location)}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-title">Weight / Build</span>
            <span class="spec-value">${escapeHtml(pet.weight || 'Standard')}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-title">Pedigree Line</span>
            <span class="spec-value">${escapeHtml(pet.pedigree)}</span>
          </div>
          <div class="spec-cell">
            <span class="spec-title">Vaccination & Health</span>
            <span class="spec-value" style="color: #059669;">
              <i class="fa-solid fa-check-circle"></i> 100% Up to Date
            </span>
          </div>
        </div>

        <div>
          <h4 style="font-size: 0.85rem; color: var(--purple-deep); text-transform: uppercase; margin-bottom: 0.4rem;">Key Temperament Traits</h4>
          <div class="pet-tags">
            ${pet.temperament.map(t => `<span class="pet-tag" style="padding: 0.4rem 0.8rem; font-size: 0.82rem;">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>

        <!-- Direct Parent Contact Box -->
        <div class="owner-contact-card">
          <div class="owner-contact-header">
            <div>
              <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--purple-primary); font-weight: 700;">Verified Pet Parent</span>
              <h3 style="font-size: 1.15rem; color: var(--purple-deep); margin-top: 2px;">${escapeHtml(pet.owner.name)}</h3>
            </div>
            <span class="owner-verified-badge" style="font-size: 0.85rem;">
              <i class="fa-solid fa-circle-check"></i> Identity Verified
            </span>
          </div>

          <p style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 1rem;">
            Feel free to contact directly via direct telephone call, email, or instant WhatsApp to arrange a matrimonial meeting.
          </p>

          <div class="owner-contact-channels">
            <a href="tel:${pet.owner.phone}" class="contact-channel-btn btn-call">
              <i class="fa-solid fa-phone"></i>
              <span>Call Phone</span>
              <small style="font-size: 0.68rem; color: var(--text-muted);">${escapeHtml(pet.owner.phone)}</small>
            </a>

            <a href="https://wa.me/${pet.owner.whatsapp}?text=${encodeURIComponent('Hello ' + pet.owner.name + ', I saw your pet ' + pet.name + ' on PawMatch Matrimony and would love to discuss a partnership!')}" 
               target="_blank" class="contact-channel-btn btn-wa">
              <i class="fa-brands fa-whatsapp"></i>
              <span>WhatsApp</span>
              <small style="font-size: 0.68rem; color: var(--text-muted);">Instant Chat</small>
            </a>

            <a href="mailto:${pet.owner.email}?subject=${encodeURIComponent('PawMatch Matrimony Proposal for ' + pet.name)}&body=${encodeURIComponent('Dear ' + pet.owner.name + ',\n\nI came across your pet ' + pet.name + ' on PawMatch and am very interested in exploring a matrimonial alliance with my pet.')}" 
               class="contact-channel-btn btn-mail">
              <i class="fa-solid fa-envelope"></i>
              <span>Send Email</span>
              <small style="font-size: 0.68rem; color: var(--text-muted);">Direct Mail</small>
            </a>
          </div>

          <div style="margin-top: 1rem; text-align: center;">
            <button class="btn btn-primary btn-block" onclick="closeModal('modal-pet-profile'); startChatWith('${pet.id}')">
              <i class="fa-solid fa-comments"></i> Start Direct In-App Chat Now
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  openModal('modal-pet-profile');
}

// Quick Contact Dialog
function openQuickContact(petId) {
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  currentQuickContactPet = pet;

  document.getElementById("qc-pet-avatar").src = pet.image;
  document.getElementById("qc-pet-name").innerText = `Connect with ${pet.name}'s Family`;
  document.getElementById("qc-pet-owner").innerText = `Pet Parent: ${pet.owner.name} (${pet.location})`;

  // Phone Link
  const phoneLink = document.getElementById("qc-link-phone");
  phoneLink.href = `tel:${pet.owner.phone}`;
  document.getElementById("qc-phone-val").innerText = pet.owner.phone;

  // WhatsApp Link
  const waLink = document.getElementById("qc-link-whatsapp");
  waLink.href = `https://wa.me/${pet.owner.whatsapp}?text=${encodeURIComponent('Hello ' + pet.owner.name + ', I am inquiring regarding matrimonial alliance for ' + pet.name + ' on PawMatch.')}`;

  // Email Link
  const emailLink = document.getElementById("qc-link-email");
  emailLink.href = `mailto:${pet.owner.email}?subject=${encodeURIComponent('Matrimony Inquiry: ' + pet.name)}&body=${encodeURIComponent('Dear ' + pet.owner.name + ',\n\nI would love to discuss a potential pairing for ' + pet.name + ' with my pet.')}`;
  document.getElementById("qc-email-val").innerText = pet.owner.email;

  // Preset default message in textarea
  document.getElementById("qc-custom-message").value = `Hello ${pet.owner.name}! I love ${pet.name}'s profile on PawMatch. My pet Milo is also fully certified and we'd love to connect with you to discuss a matrimonial match!`;

  openModal('modal-quick-contact');
}

function setPresetMsg(type) {
  const txt = document.getElementById("qc-custom-message");
  if (!currentQuickContactPet) return;

  if (type === 1) {
    txt.value = `Hi ${currentQuickContactPet.owner.name}! Looking at ${currentQuickContactPet.name}'s healthy traits and pure pedigree, our pets would make wonderful prospective partners and produce lovely healthy puppies/kittens.`;
  } else if (type === 2) {
    txt.value = `Greetings! Could you share ${currentQuickContactPet.name}'s registration certificate, recent vaccination chart, and OFA clearances? Very excited to proceed.`;
  } else if (type === 3) {
    txt.value = `Hello! Would you be open to an initial playdate in a neutral park in ${currentQuickContactPet.location} so our pets can comfortably get to know each other?`;
  }
}

function sendQuickMatrimonyMessage() {
  const text = document.getElementById("qc-custom-message").value.trim();
  if (!text) {
    showToast("Please write a message first.", "info");
    return;
  }

  if (currentQuickContactPet) {
    const petId = currentQuickContactPet.id;
    if (!chatHistory[petId]) {
      chatHistory[petId] = [];
    }

    chatHistory[petId].push({
      sender: "me",
      text: text,
      time: getCurrentTimeStr()
    });

    closeModal('modal-quick-contact');
    showToast(`Matrimonial proposal sent to ${currentQuickContactPet.owner.name}!`, "success");
    
    // Switch to direct messages view and open this pet's chat
    startChatWith(petId);

    // Auto simulated reply from pet parent after 2.5 seconds
    setTimeout(() => {
      simulateParentResponse(petId, currentQuickContactPet.owner.name);
    }, 2500);
  }
}

// Direct Messaging View System
function renderConversationsSidebar() {
  const list = document.getElementById("conversations-list");
  const petIdsWithChats = Object.keys(chatHistory);

  if (petIdsWithChats.length === 0) {
    list.innerHTML = `<div style="padding:1.5rem; text-align:center; color:var(--text-muted); font-size:0.85rem;">No active inquiries yet. Contact any pet profile to begin!</div>`;
    return;
  }

  list.innerHTML = petIdsWithChats.map(petId => {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return "";

    const messages = chatHistory[petId];
    const lastMsg = messages[messages.length - 1];
    const isActive = activeChatPetId === petId;

    return `
      <div class="conversation-item ${isActive ? 'active' : ''}" onclick="selectConversation('${petId}')">
        <img src="${pet.image}" alt="${escapeHtml(pet.name)}" class="avatar-md">
        <div class="convo-details">
          <div class="convo-name">
            <span>${escapeHtml(pet.name)}'s Parent</span>
            <span class="convo-time">${lastMsg ? lastMsg.time : ''}</span>
          </div>
          <div class="convo-snippet">${lastMsg ? escapeHtml(lastMsg.text) : 'Started a new inquiry'}</div>
        </div>
      </div>
    `;
  }).join("");
}

function selectConversation(petId) {
  activeChatPetId = petId;
  const pet = petsData.find(p => p.id === petId);
  if (!pet) return;

  renderConversationsSidebar();

  // Populate header
  document.getElementById("chat-target-avatar").src = pet.image;
  document.getElementById("chat-target-name").innerText = `${pet.name} (Parent: ${pet.owner.name})`;
  document.getElementById("chat-target-details").innerText = `${pet.breed} • ${pet.location} • Matrimony Chat`;
  
  // Set direct quick links in chat header
  const callBtn = document.getElementById("chat-call-btn");
  callBtn.href = `tel:${pet.owner.phone}`;
  const waBtn = document.getElementById("chat-whatsapp-btn");
  waBtn.href = `https://wa.me/${pet.owner.whatsapp}`;
  const emailBtn = document.getElementById("chat-email-btn");
  emailBtn.href = `mailto:${pet.owner.email}`;
  document.getElementById("chat-header-actions").style.display = "flex";

  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById("chat-messages");
  if (!activeChatPetId || !chatHistory[activeChatPetId]) {
    container.innerHTML = `
      <div class="chat-placeholder">
        <i class="fa-solid fa-paw"></i>
        <p>Select any conversation on the left, or click "Contact Owner" on any pet profile to start a direct matrimonial proposal discussion!</p>
      </div>
    `;
    return;
  }

  const messages = chatHistory[activeChatPetId];
  container.innerHTML = messages.map(m => {
    return `
      <div class="msg-row ${m.sender === 'me' ? 'sent' : 'received'}">
        <div class="msg-bubble">${escapeHtml(m.text)}</div>
        <span class="msg-meta">${m.time}</span>
      </div>
    `;
  }).join("");

  container.scrollTop = container.scrollHeight;
}

function handleSendMessage(event) {
  event.preventDefault();
  const input = document.getElementById("chat-input");
  const text = input.value.trim();
  if (!text || !activeChatPetId) return;

  chatHistory[activeChatPetId].push({
    sender: "me",
    text: text,
    time: getCurrentTimeStr()
  });

  input.value = "";
  renderChatMessages();
  renderConversationsSidebar();

  // Simulate response from pet owner
  const currentPet = petsData.find(p => p.id === activeChatPetId);
  const ownerName = currentPet ? currentPet.owner.name : "Pet Parent";
  setTimeout(() => {
    simulateParentResponse(activeChatPetId, ownerName);
  }, 1800);
}

function simulateParentResponse(petId, ownerName) {
  if (!chatHistory[petId]) return;

  const responses = [
    `Thank you for reaching out! We are reviewing Milo's pictures. He is handsome!`,
    `We would love to arrange a park playdate this upcoming weekend. Does Saturday morning work?`,
    `I can send over the pedigree certificate and vet records to your email right now.`,
    `Sounds wonderful! Feel free to call me directly at my number or message on WhatsApp anytime.`
  ];
  const randomReply = responses[Math.floor(Math.random() * responses.length)];

  chatHistory[petId].push({
    sender: "them",
    text: randomReply,
    time: getCurrentTimeStr()
  });

  if (activeChatPetId === petId) {
    renderChatMessages();
  }
  renderConversationsSidebar();
  showToast(`New message from ${ownerName}!`, "info");
}

function startChatWith(petId) {
  switchView('messages');
  if (!chatHistory[petId]) {
    chatHistory[petId] = [
      {
        sender: "them",
        text: `Hello! Thanks for your interest in a matrimonial pairing. Let us know any questions about health, pedigree, or availability!`,
        time: getCurrentTimeStr()
      }
    ];
  }
  selectConversation(petId);
}

function openProfileFromChat() {
  if (activeChatPetId) {
    openPetModal(activeChatPetId);
  }
}

function updateUnreadCount() {
  // Demo indicator
  const unreadEl = document.getElementById("unread-count");
  if (unreadEl) {
    unreadEl.style.display = "inline-block";
    unreadEl.innerText = "2";
  }
}

// Pet Registration (Create Real Profile)
function openRegisterModal() {
  openModal('modal-register');
}

function openMyProfileModal() {
  showToast("Active Profile: Milo (Purebred Golden Retriever, Male, 2 yrs). You are currently browsing as Milo's parent.", "info");
}

function updateRegisterBreedOptions() {
  // Optional enhancement when species changes
}

const SAMPLE_PET_PHOTOS = [
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
];

// State for device uploaded photo
let devicePhotoDataUrl = null;

// Handle file picked from device
function handleDeviceImageUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith("image/")) {
    showToast("Please choose a valid image file (PNG, JPG, WebP).", "info");
    return;
  }

  // Size validation (Max 8MB)
  if (file.size > 8 * 1024 * 1024) {
    showToast("File size too large. Please select an image under 8MB.", "info");
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    devicePhotoDataUrl = e.target.result;
    
    // Show preview UI
    const promptEl = document.getElementById("upload-zone-prompt");
    const previewContainer = document.getElementById("upload-preview-container");
    const previewImg = document.getElementById("upload-preview-img");
    const filenameEl = document.getElementById("upload-filename");
    const filesizeEl = document.getElementById("upload-filesize");

    if (previewImg) previewImg.src = devicePhotoDataUrl;
    if (filenameEl) filenameEl.innerText = file.name;
    if (filesizeEl) filesizeEl.innerText = `${(file.size / 1024).toFixed(1)} KB (Ready to upload)`;

    if (promptEl) promptEl.style.display = "none";
    if (previewContainer) previewContainer.style.display = "flex";

    // Clear URL field to avoid confusion
    const urlInput = document.getElementById("reg-photo");
    if (urlInput) urlInput.value = "";

    showToast("Image selected from device successfully!", "success");
  };

  reader.onerror = function() {
    showToast("Could not read image file from device.", "info");
  };

  reader.readAsDataURL(file);
}

// Clear selected device photo
function clearDevicePhoto(event) {
  if (event) {
    event.stopPropagation();
  }
  devicePhotoDataUrl = null;
  const fileInput = document.getElementById("reg-file");
  if (fileInput) fileInput.value = "";

  const promptEl = document.getElementById("upload-zone-prompt");
  const previewContainer = document.getElementById("upload-preview-container");
  if (promptEl) promptEl.style.display = "flex";
  if (previewContainer) previewContainer.style.display = "none";
}

// If user types a URL or picks random, clear device photo
function handleUrlPhotoInput(event) {
  if (event.target.value.trim().length > 0 && devicePhotoDataUrl) {
    clearDevicePhoto();
  }
}

// Setup drag and drop for upload zone
function setupDragAndDropUpload() {
  const zone = document.getElementById("file-upload-zone");
  if (!zone) return;

  ["dragenter", "dragover"].forEach(eventName => {
    zone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.add("dragover");
    });
  });

  ["dragleave", "drop"].forEach(eventName => {
    zone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      zone.classList.remove("dragover");
    });
  });

  zone.addEventListener("drop", (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files.length > 0) {
      handleDeviceImageUpload({ target: { files: files } });
    }
  });
}

function setPresetPhoto() {
  clearDevicePhoto();
  const randomPic = SAMPLE_PET_PHOTOS[Math.floor(Math.random() * SAMPLE_PET_PHOTOS.length)];
  document.getElementById("reg-photo").value = randomPic;
  showToast("Applied a verified high-resolution pet photo!", "info");
}

function handleRegisterPet(event) {
  event.preventDefault();

  const name = document.getElementById("reg-name").value.trim();
  const species = document.getElementById("reg-species").value;
  const breed = document.getElementById("reg-breed").value.trim();
  const gender = document.getElementById("reg-gender").value;
  const age = document.getElementById("reg-age").value.trim();
  const weight = document.getElementById("reg-weight").value.trim() || "20 kg";
  const location = document.getElementById("reg-location").value.trim();
  const pedigree = document.getElementById("reg-pedigree").value;
  const photoUrlInput = document.getElementById("reg-photo").value.trim();
  const temperamentRaw = document.getElementById("reg-temperament").value.trim();
  const bio = document.getElementById("reg-bio").value.trim();

  const ownerName = document.getElementById("reg-owner").value.trim();
  const ownerPhone = document.getElementById("reg-phone").value.trim();
  const ownerEmail = document.getElementById("reg-email").value.trim();
  const cleanPhone = ownerPhone.replace(/\D/g, "") || "1234567890";

  // Priority: 1. Image from device (Data URL), 2. Web URL, 3. Random sample
  const finalImage = devicePhotoDataUrl || photoUrlInput || SAMPLE_PET_PHOTOS[0];

  const newPet = {
    id: "pet-" + Date.now(),
    name: name,
    species: species,
    breed: breed,
    gender: gender,
    age: age,
    weight: weight,
    location: location,
    compatibility: Math.floor(Math.random() * 10) + 90, // 90-99%
    pedigree: pedigree,
    vaccinated: true,
    temperament: temperamentRaw ? temperamentRaw.split(",").map(s => s.trim()).filter(Boolean) : ["Loving", "Healthy", "Playful"],
    bio: bio || `${name} is an exceptional ${breed} seeking an ethical, loving partner for matrimony.`,
    image: finalImage,
    owner: {
      name: ownerName,
      phone: ownerPhone,
      email: ownerEmail,
      whatsapp: cleanPhone,
      verified: true
    }
  };

  petsData.unshift(newPet);
  saveData();
  populateBreedFilter();
  renderGrid(petsData);

  closeModal('modal-register');
  document.getElementById("register-pet-form").reset();
  clearDevicePhoto();
  showToast(`Congratulations! ${newPet.name}'s matrimony profile is now LIVE!`, "success");
  switchView('explore');
}

// Modal Handlers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

// Close modal when clicking outside dialog
document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop.id);
    }
  });
});

// Toast Notifications Helper
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "heart") icon = "fa-heart";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "slideToast 0.3s ease reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3400);
}

// Utilities
function escapeHtml(string) {
  if (!string) return "";
  return String(string)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCurrentTimeStr() {
  const d = new Date();
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
