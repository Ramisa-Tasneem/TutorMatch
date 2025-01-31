import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Home = () => {
    const featuredtuition = [
        { title: "English", location: "Bansree", type: "Remote", salary: "2k" },
        { title: "Bangla", location: "Gulshan", type: "Remote", salary: "2k" },
        { title: "Arabic", location: "Bannai", type: "Remote", salary: "20k" },
        { title: "Biology", location: "Demra", type: "Remote", salary: "5k" },
        { title: "Physics", location: "Khilgaon", type: "Remote", salary: "2k" },
        { title: "Higher Math", location: "Uttara", type: "Remote", salary: "8k" },
    ];

    const categories = [
        { name: "English", count: 50 },
        { name: "Finance", count: 20 },
        { name: "Arabic", count: 25 },
        { name: "Data Science", count: 30 },
        { name: "Higher Math", count: 70 },
        { name: "Biology", count: 10 },
    ];

    return (
        <>
            <Navbar />
            <header className="banner" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
                <h1>Find your Tuition</h1>
                <p>Thousands of Tuition available.</p>
                <button>Explore Now</button>
                <div className="search-container">
                    <input type="text" placeholder="Keywords" />
                    <input type="text" placeholder="Location" />
                    <button>Search</button>
                </div>
            </header>

            <section className="categories">
                <h2>Popular Subjects</h2>
                <div className="category-list">
                    {categories.map((category, index) => (
                        <div key={index} className="category-card">
                            <h3>{category.name}</h3>
                            <p>{category.count} Available</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="featured-tuition">
                <h2>Featured Tuition</h2>
                <div className="tuition-list">
                    {featuredtuition.map((tuition, index) => (
                        <div key={index} className="tuition-card">
                            <h3>{tuition.title}</h3>
                            <p>Location: {tuition.location}</p>
                            <p>Type: {tuition.type}</p>
                            <p>Salary: {tuition.salary}</p>
                            <button>Details</button>
                            <button>Apply now</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="latest-tuition">
                <h2>Latest Tuition</h2>
                <div className="tuition-list">
                    {featuredtuition.map((tuition, index) => (
                        <div key={index} className="tuition-card">
                            <h3>{tuition.title}</h3>
                            <p>Location: {tuition.location}</p>
                            <p>Type: {tuition.type}</p>
                            <p>Salary: {tuition.salary}</p>
                            <button>Details</button>
                            <button>Apply now</button>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
