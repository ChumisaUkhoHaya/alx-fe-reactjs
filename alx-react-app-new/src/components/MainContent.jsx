// src/components/MainContent.jsx
function MainContent() {
    return (
            <main style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '500px' }}>
            <h2 style={{ color: '#333' }}>{props.title}</h2>
            <p>I love to visit New York, Paris, and Tokyo.</p>
        </main>
    );
}

export default MainContent;
