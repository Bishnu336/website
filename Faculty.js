// Faculty
// Sample data for each department
const facultyData = {
    artsAndHumanities: [
        { image: "10.jpeg", name: "Kelzang Namgay", role: " Lecturer" },
        { image: "26.png", name: "Yangdon Tshomo", role: " Lecturer" },
        { image: "17.jpeg", name: "Sonam Zangpo", role: "  Lecturer" },
        { image: "27.png", name: "Ngawang Tengay", role: " Lecturer" },
        { image: "28.png", name: "Dr. S Chitra", role: "Assistant Professor" },
        { image: "2.jpeg", name: "Tshering Samdrup", role: "Associate Lecturer" },
        { image: "8.jpeg", name: "Sangay Choden", role: "Associate Lecturer" },
        { image: "12.jpeg", name: "Anju Chhetri", role: "Lecturer" },
        { image: "9.jpeg", name: "Sangay Lhaden", role: "Associate Lecturer" }
    ],
    socialScience: [
        { image: "13.jpeg", name: "Leki Sangay", role: "Lecturer" },
        { image: "31.png", name: "Tandin Penjor", role: "Associate Lecturer" },
        { image: "30.png", name: "Chandra Lal Adhakari", role: "Associate Lecturer" },
        { image: "4.jpeg", name: "Jeewan Kumar Bastola", role: "Associate Lecturer" },
        { image: "18.png", name: "Ugyen Lhendup", role: "Lecturer" },
        { image: "15.png", name: "Dr. Yezer", role: "Lecturer" },
        { image: "14.png", name: "Sonam Dendup", role: "Lecturer" },
        { image: "29.png", name: "Sonam Choeki Wangmo", role: " Asssistant Lecturer" },
    ],
    lifeScience: [
        { image: "34.png", name: "Karma Wangchu", role: "Lecturer" },
        { image: "33.png", name: "Ugyen Dorji Tamang", role: "Assistant Lecturer" },
        { image: "32.png", name: "Tshering Dekar", role: "Associate Lecturer" },
        { image: "1.jpeg", name: "Mohan singh Rana", role: "Associate Lecturer" },
        { image: "11.jpeg", name: "Yangchen Tshomo", role: "Assistant Lecturer" }
    ],
    MathematicalScience : [
        { image: "25.png", name: "Sangay Thinley", role: "Lecturer" },
        { image: "21.jpeg", name: "Norbu Zangpo", role: "Assistant Lecturer" },
        { image: "23.png", name: "Pema Wangdi", role: "Lecturer" },
        { image: "20.png", name: "Dechen Lhendup", role: "Associate Lecturer" },
        { image: "5.jpeg", name: "Ugyen Sandruo Tshering", role: "Assistant Lecturer" },
        { image: "6.jpeg", name: "Manju Gurung", role: "Associate Lecturer" },
        { image: "7.jpeg", name: "Chimi Lhazom", role: "Assistant Lecturer" },
        { image: "35.png", name: "Paul Raj ", role: "Assistant Professor" },
        { image: "36.png", name: "Karma Dorji", role: "Associate Lecturer" },
        { image: "37.png", name: "R. Balamurugan", role: "Assistant Professor" }
    ],
    PhysicalScience: [
        { image: "3.jpeg", name: "Dr. Jas Raj Subba", role: "Lecturer" },
        { image: "19.jpeg", name: "Mon Bahadhur Ghalley", role: "Associate Lecturer" },
        { image: "41.png", name: "Tshewnag Dendup", role: "Assistant Professor" },
        { image: "40.png", name: "Punam Mafchan", role: "Lecturer" },
        { image: "39.png", name: "Yetho Lhamo", role: "Assistant Lecturer" },
        { image: "38.png", name: "Sonam Phuntsho", role: "Assistant Lecturer" },
        { image: "24.jpeg", name: "Shacha Thinley", role: "Associate Lecturer" }

    ]
};

// Function to create faculty cards for a department
function loadFacultyCards(departmentId, facultyArray) {
    const container = document.getElementById(departmentId);
    facultyArray.forEach(faculty => {
        // Create card element
        const card = document.createElement('div');
        card.classList.add('faculty-card');

        // Faculty image
        const img = document.createElement('img');
        img.src = faculty.image;
        img.alt = `${faculty.name} photo`;
        card.appendChild(img);

        // Faculty info container
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('faculty-info');

        // Faculty name
        const name = document.createElement('div');
        name.classList.add('faculty-name');
        name.textContent = faculty.name;
        infoContainer.appendChild(name);

        // Faculty role
        const role = document.createElement('div');
        role.classList.add('faculty-role');
        role.textContent = faculty.role;
        infoContainer.appendChild(role);

        // Append info container to card
        card.appendChild(infoContainer);

        // Append card to container
        container.appendChild(card);
    });
}

// Load faculty profiles on page load for each department
window.onload = () => {
    loadFacultyCards("artsAndHumanities", facultyData.artsAndHumanities);
    loadFacultyCards("socialScience", facultyData.socialScience);
    loadFacultyCards("lifeScience", facultyData.lifeScience);
    loadFacultyCards("MathematicalScience", facultyData.MathematicalScience);
    loadFacultyCards("PhysicalScience", facultyData.PhysicalScience);
};


