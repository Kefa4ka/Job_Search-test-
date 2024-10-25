// Generate over 1000 job listings
const jobTitles = [
    "Розробник Frontend", "Бухгалтер", "Менеджер з продажу", "Дизайнер UX/UI", "Аналітик даних",
    "Розробник Backend", "HR-менеджер", "Маркетолог", "Системний адміністратор", "Юрист",
    "Графічний дизайнер", "Вчитель англійської мови", "Інженер-механік", "Фінансовий аналітик", "Менеджер проектів",
    "Лікар-терапевт", "SEO-спеціаліст", "Архітектор", "Психолог", "Шеф-кухар"
];

const companies = [
    "Tech Solutions", "Finance Pro", "Sales Master", "Creative Mind", "Data Insights",
    "Server Pro", "People First", "Brand Builders", "IT Support", "Legal Eagles",
    "Visual Art", "Language School", "Engineering Solutions", "Money Matters", "Project Masters",
    "Health Center", "Digital Growth", "Build & Design", "Mind Matters", "Gourmet Restaurant"
];

const locations = [
    "Київ", "Львів", "Одеса", "Харків", "Дніпро", "Запоріжжя", "Вінниця", "Полтава", "Суми", "Тернопіль",
    "Луцьк", "Рівне", "Миколаїв", "Житомир", "Хмельницький", "Черкаси", "Чернігів", "Івано-Франківськ", "Ужгород", "Херсон"
];

const jobTypes = ["Повний день", "Неповний день", "Віддалено", "Контракт"];

const industries = [
    "IT та телекомунікації", "Фінанси та банківська справа", "Продажі та маркетинг", "Охорона здоров'я",
    "Освіта", "Виробництво", "Будівництво", "Транспорт та логістика", "Готельно-ресторанний бізнес",
    "Роздрібна торгівля", "Нерухомість", "Юриспруденція", "Медіа та реклама", "Енергетика",
    "Сільське господарство", "Автомобільна промисловість", "Аерокосмічна галузь", "Фармацевтика",
    "Консалтинг", "Некомерційні організації"
];

function generateSalary() {
    const min = Math.floor(Math.random() * 5 + 1) * 10000;
    const max = min + Math.floor(Math.random() * 5 + 1) * 10000;
    return `${min} - ${max} грн`;
}

function generateExperience() {
    const years = Math.floor(Math.random() * 10);
    return years === 0 ? "Без досвіду" : `${years}+ років`;
}

function generateJobDescription() {
    return "Ми шукаємо талановитого спеціаліста для приєднання до нашої команди. Ви матимете можливість працювати над цікавими проектами та розвивати свої навички.";
}

function generateRequirements() {
    const requirements = [
        "Вища освіта у відповідній галузі",
        "Відмінні комунікативні навички",
        "Здатність працювати в команді",
        "Аналітичне мислення",
        "Знання англійської мови",
        "Досвід роботи з відповідними технологіями/інструментами",
        "Бажання постійно вчитися та розвиватися"
    ];
    const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 requirements
    return requirements.sort(() => 0.5 - Math.random()).slice(0, count);
}

function generateResponsibilities() {
    const responsibilities = [
        "Розробка та впровадження нових проектів",
        "Співпраця з іншими відділами компанії",
        "Аналіз та оптимізація робочих процесів",
        "Підготовка звітів та презентацій",
        "Участь у стратегічному плануванні",
        "Навчання та менторство молодших співробітників",
        "Забезпечення високої якості роботи та дотримання дедлайнів"
    ];
    const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 responsibilities
    return responsibilities.sort(() => 0.5 - Math.random()).slice(0, count);
}

function generateBenefits() {
    const benefits = [
        "Конкурентна заробітна плата",
        "Медичне страхування",
        "Гнучкий графік роботи",
        "Можливість віддаленої роботи",
        "Корпоративні тренінги та навчання",
        "Сучасний офіс у центрі міста",
        "Дружній колектив",
        "Корпоративні заходи та вечірки",
        "Знижки на продукти компанії",
        "Безкоштовні напої та фрукти в офісі"
    ];
    const count = Math.floor(Math.random() * 3) + 3; // 3 to 5 benefits
    return benefits.sort(() => 0.5 - Math.random()).slice(0, count);
}

function generateJobs(count) {
    const jobs = [];
    for (let i = 0; i < count; i++) {
        jobs.push({
            id: i + 1,
            title: jobTitles[Math.floor(Math.random() * jobTitles.length)],
            company: companies[Math.floor(Math.random() * companies.length)],
            location: locations[Math.floor(Math.random() * locations.length)],
            type: jobTypes[Math.floor(Math.random() * jobTypes.length)],
            salary: generateSalary(),
            experience: generateExperience(),
            description: generateJobDescription(),
            requirements: generateRequirements(),
            responsibilities: generateResponsibilities(),
            benefits: generateBenefits(),
            industry: industries[Math.floor(Math.random() * industries.length)],
            datePosted: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000),
            featured: Math.random() < 0.1 // 10% chance of being featured
        });
    }
    return jobs;
}

const jobs = generateJobs(1200); // Generate 1200 job listings

let currentPage = 1;
const jobsPerPage = 12;
let filteredJobs = [...jobs];

function displayJobs(jobsToShow) {
    const jobList = document.getElementById('jobList');
    jobList.innerHTML = '';
    jobsToShow.forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-item';
        jobElement.innerHTML = `
            <h3 class="job-title">${job.title}</h3>
            <p class="company">${job.company}</p>
            <p class="location">${job.location}</p>
            <span class="job-type">${job.type}</span>
            <p class="salary">${job.salary}</p>
            <p class="experience">Досвід: ${job.experience}</p>
            <p>Дата публікації: ${job.datePosted.toLocaleDateString()}</p>
            <button onclick="showJobDetails(${job.id})" class="btn btn-secondary">Детальніше</button>
            ${job.featured ? '<span class="featured-tag">Рекомендовано</span>'  : ''}
        `;
        jobList.appendChild(jobElement);
    });
    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
    document.getElementById('currentPage').textContent = `Сторінка ${currentPage} з ${totalPages}`;
}

function changePage(direction) {
    currentPage += direction;
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    displayJobs(filteredJobs.slice(startIndex, endIndex));
}

function searchJobs() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const locationFilter = document.getElementById('locationFilter').value;
    const jobTypeFilter = document.getElementById('jobTypeFilter').value;
    const salaryFilter = document.getElementById('salaryFilter').value;
    const experienceFilter = document.getElementById('experienceFilter').value;
    const industryFilter = document.getElementById('industryFilter').value;

    filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm) ||
                              job.company.toLowerCase().includes(searchTerm) ||
                              job.description.toLowerCase().includes(searchTerm);
        const matchesLocation = locationFilter === '' || job.location === locationFilter;
        const matchesJobType = jobTypeFilter === '' || job.type === jobTypeFilter;
        const matchesSalary = matchSalaryFilter(job.salary, salaryFilter);
        const matchesExperience = matchExperienceFilter(job.experience, experienceFilter);
        const matchesIndustry = industryFilter === '' || job.industry === industryFilter;

        return matchesSearch && matchesLocation && matchesJobType && matchesSalary && matchesExperience && matchesIndustry;
    });

    currentPage = 1;
    displayJobs(filteredJobs.slice(0, jobsPerPage));
}

function matchSalaryFilter(jobSalary, filter) {
    if (filter === '') return true;
    const [min, max] = jobSalary.split(' - ')[0].replace(' грн', '').split('-').map(Number);
    const avgSalary = (min + max) / 2;
    
    switch(filter) {
        case '0-30000': return avgSalary <= 30000;
        case '30000-50000': return avgSalary > 30000 && avgSalary <= 50000;
        case '50000-80000': return avgSalary > 50000 && avgSalary <= 80000;
        case '80000-120000': return avgSalary > 80000 && avgSalary <= 120000;
        case '120000+': return avgSalary > 120000;
        default: return true;
    }
}

function matchExperienceFilter(jobExperience, filter) {
    if (filter === '') return true;
    const years = parseInt(jobExperience);
    
    switch(filter) {
        case '0-1': return years <= 1;
        case '1-3': return years > 1 && years <= 3;
        case '3-5': return years > 3 && years <= 5;
        case '5+': return years > 5;
        default: return true;
    }
}

function showAllJobs() {
    filteredJobs = [...jobs];
    currentPage = 1;
    displayJobs(filteredJobs.slice(0, jobsPerPage));
}

function showFeaturedJobs() {
    filteredJobs = jobs.filter(job => job.featured);
    currentPage = 1;
    displayJobs(filteredJobs.slice(0, jobsPerPage));
}

function showSavedJobs() {
    const savedJobIds = JSON.parse(localStorage.getItem('savedJobs')) || [];
    filteredJobs = jobs.filter(job => savedJobIds.includes(job.id));
    currentPage = 1;
    displayJobs(filteredJobs.slice(0, jobsPerPage));
}

function showJobDetails(jobId) {
    const job = jobs.find(j => j.id === jobId);
    if (!job) return;

    const modal = document.getElementById('jobDetailsModal');
    const title = document.getElementById('jobTitle');
    const company = document.getElementById('jobCompany');
    const location = document.getElementById('jobLocation');
    const type = document.getElementById('jobType');
    const salary = document.getElementById('jobSalary');
    const description = document.getElementById('jobDescription');
    const requirements = document.getElementById('jobRequirements');
    const responsibilities = document.getElementById('jobResponsibilities');
    const benefits = document.getElementById('jobBenefits');
    const applyBtn = document.getElementById('applyJobBtn');

    title.textContent = job.title;
    company.textContent = job.company;
    location.textContent = job.location;
    type.textContent = job.type;
    salary.textContent = job.salary;
    description.textContent = job.description;

    requirements.innerHTML = job.requirements.map(req => `<li>${req}</li>`).join('');
    responsibilities.innerHTML = job.responsibilities.map(resp => `<li>${resp}</li>`).join('');
    benefits.innerHTML = job.benefits.map(benefit => `<li>${benefit}</li>`).join('');

    applyBtn.onclick = () => applyForJob(jobId);

    modal.style.display = 'block';
}

function applyForJob(jobId) {
    if (isLoggedIn()) {
        const applyJobModal = document.getElementById('applyJobModal');
        applyJobModal.style.display = 'block';
        document.getElementById('jobDetailsModal').style.display = 'none';
    } else {
        alert('Будь ласка, увійдіть або зареєструйтеся, щоб подати заявку на вакансію.');
        openLoginModal();
    }
}

// Fake authentication system
let currentUser = null;

function isLoggedIn() {
    return currentUser !== null;
}

function login(email, password) {
    // In a real system, this would validate against a backend
    currentUser = { email: email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Ви успішно увійшли!');
    closeLoginModal();
    updateLoginStatus();
}

function register(name, email, password) {
    // In a real system, this would send data to a backend
    currentUser = { name: name, email: email };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Ви успішно зареєструвалися!');
    closeRegisterModal();
    updateLoginStatus();
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateLoginStatus();
}

function updateLoginStatus() {
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const userProfileBtn = document.getElementById('userProfileBtn');
    if (isLoggedIn()) {
        loginRegisterBtn.style.display = 'none';
        userProfileBtn.style.display = 'inline-block';
        userProfileBtn.textContent = `Вітаємо, ${currentUser.email}`;
        userProfileBtn.onclick = openUserProfileModal;
    } else {
        loginRegisterBtn.style.display = 'inline-block';
        userProfileBtn.style.display = 'none';
        loginRegisterBtn.textContent = 'Увійти / Зареєструватися';
        loginRegisterBtn.onclick = openLoginModal;
    }
}

// Modal functionality
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openLoginModal() {
    openModal('loginModal');
}

function closeLoginModal() {
    closeModal('loginModal');
}

function openRegisterModal() {
    closeLoginModal();
    openModal('registerModal');
}

function closeRegisterModal() {
    closeModal('registerModal');
}

function openForgotPasswordModal() {
    closeLoginModal();
    openModal('forgotPasswordModal');
}

function openUserProfileModal() {
    openModal('userProfileModal');
}

function openCareerResourcesModal() {
    openModal('careerResourcesModal');
}

function openCompanyDirectoryModal() {
    openModal('companyDirectoryModal');
}

function openSalaryCalculatorModal() {
    openModal('salaryCalculatorModal');
}

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
}

// Close buttons functionality
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        this.closest('.modal').style.display = 'none';
    }
});

document.getElementById('showRegisterForm').onclick = openRegisterModal;

document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    login(email, password);
}

document.getElementById('registerForm').onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Паролі не співпадають');
        return;
    }
    
    register(name, email, password);
}

document.getElementById('forgotPasswordForm').onsubmit = function(e) {
    e.preventDefault();
    const email = document.getElementById('forgotPasswordEmail').value;
    // In a real application, this would trigger a password reset process
    alert(`Інструкції з відновлення паролю відправлені на ${email}`);
    closeModal('forgotPasswordModal');
}

document.getElementById('userProfileForm').onsubmit = function(e) {
    e.preventDefault();
    // In a real application, this would update the user's profile information
    alert('Профіль оновлено успішно!');
    closeModal('userProfileModal');
}

document.getElementById('jobApplicationForm').onsubmit = function(e) {
    e.preventDefault();
    // In a real application, this would submit the job application
    alert('Ваша заявка успішно відправлена!');
    closeModal('applyJobModal');
}

// Populate location and industry filters
const locationFilter = document.getElementById('locationFilter');
const industryFilter = document.getElementById('industryFilter');

locations.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
});

industries.forEach(industry => {
    const option = document.createElement('option');
    option.value = industry;
    option.textContent = industry;
    industryFilter.appendChild(option);
});

// Job sorting functionality
function sortJobs(criteria) {
    switch(criteria) {
        case 'date':
            filteredJobs.sort((a, b) => b.datePosted - a.datePosted);
            break;
        case 'salary':
            filteredJobs.sort((a, b) => {
                const salaryA = parseInt(a.salary.split(' - ')[0]);
                const salaryB = parseInt(b.salary.split(' - ')[0]);
                return salaryB - salaryA;
            });
            break;
    }
    currentPage = 1;
    displayJobs(filteredJobs.slice(0, jobsPerPage));
}

// Toggle job view (list/grid)
function toggleJobView(view) {
    const jobList = document.getElementById('jobList');
    jobList.className = view === 'list' ? 'job-list list-view' : 'job-list grid-view';
}

// Company directory search
function searchCompanies() {
    const searchTerm = document.getElementById('companySearchInput').value.toLowerCase();
    const companyList = document.getElementById('companyList');
    companyList.innerHTML = '';

    const filteredCompanies = companies.filter(company => company.toLowerCase().includes(searchTerm));

    filteredCompanies.forEach(company => {
        const companyElement = document.createElement('div');
        companyElement.className = 'company-item';
        companyElement.innerHTML = `
            <h3>${company}</h3>
            <p>Галузь: ${industries[Math.floor(Math.random() * industries.length)]}</p>
            <p>Розташування: ${locations[Math.floor(Math.random() * locations.length)]}</p>
            <button onclick="viewCompanyJobs('${company}')" class="btn btn-secondary">Переглянути вакансії</button>
        `;
        companyList.appendChild(companyElement);
    });
}

function viewCompanyJobs(company) {
    filteredJobs = jobs.filter(job => job.company === company);
    currentPage = 1;
    displayJobs(filteredJobs.slice(0, jobsPerPage));
    closeModal('companyDirectoryModal');
}

// Salary calculator
document.getElementById('salaryCalculatorForm').onsubmit = function(e) {
    e.preventDefault();
    const jobTitle = document.getElementById('jobTitle').value;
    const location = document.getElementById('location').value;
    const experience = parseInt(document.getElementById('experience').value);
    const education = document.getElementById('education').value;

    // This is a simplified calculation and should be replaced with more accurate data in a real application
    let baseSalary = 30000;
    baseSalary += experience * 5000;
    
    switch(education) {
        case 'bachelor':
            baseSalary *= 1.2;
            break;
        case 'master':
            baseSalary *= 1.4;
            break;
        case 'phd':
            baseSalary *= 1.6;
            break;
    }

    // Location adjustment (simplified)
    if (location === 'Київ') {
        baseSalary *= 1.3;
    }

    const minSalary = Math.round(baseSalary * 0.8);
    const maxSalary = Math.round(baseSalary * 1.2);

    document.getElementById('estimatedSalary').textContent = `${baseSalary} грн`;
    document.getElementById('salaryRange').textContent = `${minSalary} - ${maxSalary} грн`;
    document.getElementById('salaryResult').style.display = 'block';
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value;
    // In a real application, this would add the email to a mailing list
    alert(`Дякуємо за підписку! Ви будете отримувати новини на адресу ${email}`);
    document.getElementById('newsletterEmail').value = '';
}

// Initial display
showAllJobs();

// Check for logged in user on page load
const storedUser = localStorage.getItem('currentUser');
if (storedUser) {
    currentUser = JSON.parse(storedUser);
    updateLoginStatus();
}

// Update jobs every 10 minutes
setInterval(() => {
    console.log('Оновлення списку вакансій...');
    // In a real application, this would fetch new job listings from a server
    // For demonstration, we'll just randomize the order of jobs
    jobs.sort(() => Math.random() - 0.5);
    showAllJobs();
}, 600000);