import React from 'react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <img 
                    src="media/images/homeHero.png" 
                    alt="Hero" 
                    style={{ width: '200%', height: 'auto', borderRadius: '10px', marginBottom: '20px' , top: '20px', right: '300px', position: 'relative'}} 
                />
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    Invest in everything
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '20px' }}>
                    Online platform to invest in stocks, derivatives, mutual funds, and more
                </p>
                <button 
                    style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '12px 24px',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                    onClick={() => navigate('/signup')}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Hero;
