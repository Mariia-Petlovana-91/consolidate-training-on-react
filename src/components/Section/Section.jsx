import '../Section/Section.scss';

export default function Section({ title, children }) {
    return (
        <section className="section">
            <h2 className="title__second">{title}</h2>
            {children}
        </section>
    );
}