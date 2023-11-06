// Navbar Component
function Navbar() {
    return (
        <nav className="navBar">
            <ul>
                <li><a href="#">Platform</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Log In</a></li>
            </ul>
        </nav>
    );
}

// Hero Section Component
function HeroSection() {
    return (
        <section className="heroic-section">
            <h1>Welcome to Our Page</h1>
            <p>Discover Amazing Flowers.</p>
        </section>
    );
}

// Card Section Component
function CardSection() {
    const cardsData = [
        {
            title: 'Lily',
            content: 'Content for Card 1',
            iconUrl: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D',
        },
        {
            title: 'Iris',
            content: 'Content for Card 2',
            iconUrl: 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
            title: 'Orchid',
            content: 'Content for Card 2',
            iconUrl: 'https://images.unsplash.com/photo-1469259943454-aa100abba749?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D',
        },
        {
            title: 'Roses',
            content: 'Content for Card 2',
            iconUrl: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D',
        },
        {
            title: 'Tulip',
            content: 'Content for Card 2',
            iconUrl: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ];

    return (
        <section className="card-section">
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    <img src={card.iconUrl} alt={card.title} />
                    <h2>{card.title}</h2>
                    <p>{card.content}</p>
                </div>
            ))}
        </section>
    );
}

function App(){
    return(
        <div>
        <Navbar/>
        <HeroSection/>,
        <CardSection/>
        </div>
    )

    
}

ReactDOM.render(
   <App/>,
    document.getElementById('root')
);

