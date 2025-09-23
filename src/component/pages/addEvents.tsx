import { useState } from 'react';
import './addEvents.css';

export function Addevent() {
    const [hoverBtn, setHoverBtn] = useState(false);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '2rem',
                background: 'linear-gradient(135deg, #2575fc 0%, #6a11cb 100%)',
                minHeight: '100vh',
                boxSizing: 'border-box',
            }}
        >
            <form
                style={{
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '15px',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)',
                    maxWidth: '500px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
                action=""
            >
                <input
                    type="text"
                    placeholder="Nom de l'événement"
                    className="inputEvent"
                    style={{
                        marginBottom: '1rem',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1.8px solid #ddd',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        outline: 'none',
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2575fc';
                        e.currentTarget.style.boxShadow = '0 0 8px #2575fc';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#ddd';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                />
                <input
                    type="text"
                    placeholder="Lieu"
                    className="inputEvent"
                    style={{
                        marginBottom: '1rem',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1.8px solid #ddd',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        outline: 'none',
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2575fc';
                        e.currentTarget.style.boxShadow = '0 0 8px #2575fc';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#ddd';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                />
                <label htmlFor="event-date" style={{ marginBottom: '0.3rem', fontWeight: 500 }}>
                    Date de l'événement
                </label>
                <input
                    id="event-date"
                    type="date"
                    className="inputEvent inputEvent-date"
                    placeholder="Date de l'événement"
                    title="Date de l'événement"
                />
                
                <textarea
                    name="description"
                    cols={30}
                    rows={6}
                    placeholder="Description"
                    className="inputEvent"
                    style={{
                        marginBottom: '1.5rem',
                        padding: '1rem',
                        borderRadius: '10px',
                        border: '1.8px solid #ddd',
                        fontSize: '1rem',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                        outline: 'none',
                    }}
                    onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2575fc';
                        e.currentTarget.style.boxShadow = '0 0 8px #2575fc';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#ddd';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                />
                <button
                    type="submit"
                    className="btnEvent"
                    style={{
                        backgroundColor: hoverBtn ? '#6a11cb' : '#2575fc',
                        color: 'white',
                        fontWeight: '700',
                        padding: '0.75rem 0',
                        borderRadius: '25px',
                        border: 'none',
                        fontSize: '1.1rem',
                        boxShadow: '0 5px 15px rgba(37,117,252,0.5)',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, transform 0.2s ease',
                    }}
                    onMouseEnter={() => setHoverBtn(true)}
                    onMouseLeave={() => setHoverBtn(false)}
                >
                    Ajouter l'événement
                </button>
            </form>
        </div>
    );
}
