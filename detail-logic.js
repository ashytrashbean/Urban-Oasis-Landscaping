const projectData = [
    {
        id: "bohemian-retreat",
        title: "The Bohemian Retreat",
        tagline:"Coastal Comfort on the Covered Porch",
        mainImg:"/portfolio-images/1.png",
        challange:{
            text:"The 'before' space was clean but lacked character. It had great bones but felt cold and neglected.",
            points:["Bare walls and decking", "No definition or personality"]
        },
        strategy:[
            "Grounding Texture: We laid down a large, natural jute area rug.",
            "Modern Comfort: We chose sleek, modern black-framed lounge chairs.",
            "Lush Greenery: Carefully selected indoor/outdoor plants added life."
        ],
        result:"A porch that feels instantly inviting and perfectly designed for lounging."
    },
    {
        id: "floral-sanctuarty",
        title: "Floral Sanctuary",
        tagline:"A Pink Paradise in the City",
        mainImg:"/portfolio-images/2.png",
        challange:{
            text:"The client wanted a high-impact floral look but had a very limited budget and tight space.",
            points:["Limited floor space","Very windy conditions"]
        },
        strategy:["Vertical Blooms: We used wall-mounted planters to save floor space.",
            "Wind-Resistant Decor: Heavy ceramic pots ensured nothing moved.",
            "Color Palette: We focused on soft pinks and creams to match the sunset."],
        result:"A dreamy, floral-heavy escape that maximizes every square inch of the balcony."
    },
    {
        id: "urban-jungle",
        title: "The Urban Jungle",
        tagline:"Maximalist Greenery for Privacy",
        mainImg:"/portfolio-images/3.png",
        challange:{
            text:"The client wanted to elevate the look of their drab, bland apartment balcony into an enchanting and inviting outdoor space.",
            points:["Dull and uninviting space","Unattractive wood planks and lack of decor","Basic lighting fixture"]
        },
        strategy:["Adding curtains for softness and privacy.","Artificial turf for warmth and color.",
            "Artificial foliage to the ceiling, adding to the enchanting outdoor space.",
            "Using wall hangings to add depth and texture.",
            "Incorporating new furniture and decor lighting." ],
        result:"A transformed, beautiful, and cozy outdoor balcony space perfect for relaxation with added style and charm."
    },
    {
        id: "sunrise-nook",
        title: "Bistro Sunrise Nook",
        tagline:"Morning Coffee with a View",
        mainImg:"/portfolio-images/4.png",
        challange:{
            text:"A tiny 'Bistro' balcony that the client thought was too small for furniture.",
            points:["Extremely narrow layout", "Direct morning sun"]
        },
        strategy:["Foldable Elegance: We chose a classic wrought-iron bistro set that folds away.",
            "Shade Solutions: A half-umbrella was installed to provide UV protection.",
            "Herb Garden: Fragrant rosemary and mint for a sensory experience."],
        result:"Proof that even the smallest balconies can become a functional breakfast spot."
    },
    {
        id: "sunset-lounge",
        title: "Sunset Lounge",
        tagline:"High-Rise Golden Hour Haven",
        mainImg:"/portfolio-images/5.png",
        challange:{
            text:"With stunning views but zero personality, this balcony felt 'naked' and uninviting for evening relaxation.",
            points:["Empty corner syndrome", "Exposed glass railing", "No designated seating area"]
        },
        strategy:["View Optimization: We used low-profile furniture so the city skyline remains the main attraction.",
            "Cozy Accents: Added weather-resistant textiles and a side table for sunset cocktails.",
            "Ambient Glow: Hidden LED string lights were added to create a soft mood as the sun goes down."],
        result:"The perfect spot for the client to unwind after work and enjoy the best views in the city."
    },
    {
        id: "zen-escape",
        title: "Modern Zen Escape",
        tagline:"Minimalist Mindfulness",
        mainImg:"/portfolio-images/6.png",
        challange:{
            text:"Minimalist Mindfulness",
            points:["Narrow walking path", "Sterile flooring", "Limited light in certain corners"]
        },
        strategy:["Material Swap: Replaced the cold tiles with interlocking acacia wood floor tiles for instant warmth.",
            "Minimalist Greenery: Chose sculptural, architectural plants that take up height, not width.",
            "Gravel Features: Used white river stones to create a clean 'rock garden' border."],
        result:"A clean, peaceful walkway that feels like a private spa retreat."
    }
]
// 1. THE SCANNER: Look at the URL and grab the ID after "?id="
const urlParams = new URLSearchParams(window.location.search);
const currentID = urlParams.get('id');

// 2. THE SEARCH PARTY: Find the one project in our array that matches that ID
// Note: "projectData" comes from your other file!
const currentProject = projectData.find(project => project.id === currentID);

// 3. THE DELIVERY: If we found a match, pour the data into the HTML
if (currentProject) {
    // Basic text swaps
    document.getElementById('proj-title').innerText = currentProject.title;
    document.getElementById('proj-tagline').innerText = currentProject.tagline;
    document.getElementById('proj-main-img').src = currentProject.mainImg;
    document.getElementById('proj-challenge-text').innerText = currentProject.challange.text;

    // --- Handling the Lists (The slightly "advanced" part) ---

    // Clear and fill the Challenge List
    const challengeList = document.getElementById('proj-challenge-list');
    currentProject.challange.points.forEach(point => {
        let li = document.createElement('li');
        li.innerText = point;
        challengeList.appendChild(li);
    });

    // Clear and fill the Strategy List
    const strategyList = document.getElementById('proj-strategy-list');
    currentProject.strategy.forEach(step => {
        let li = document.createElement('li');
        li.innerText = step;
        strategyList.appendChild(li);
    });

} else {
    // What happens if the ID is wrong?
    document.body.innerHTML = "<h1>Project not found!</h1><a href='index.html'>Go Back</a>";
}
