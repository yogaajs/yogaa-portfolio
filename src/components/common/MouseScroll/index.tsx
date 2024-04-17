'use client'

//  Imports
// ===========================================================

// Locals
import styles from './styles.module.css';


//  Types
// ===========================================================

interface ComponentProps {
    id: string;  // The id of the element to scroll to
}


//  Component
// ===========================================================

const MouseScroll: React.FC<ComponentProps> = ({ id }) => {
    const scrollToSection = () => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <button type="button" className={styles.scrolldown} onClick={scrollToSection}>
            <svg height="30" width="10">
                <circle className={styles.dot1} cx="5" cy="15" r="2" />
                <circle className={styles.dot2} cx="5" cy="15" r="2" />
            </svg>
        </button>
    )
}

export default MouseScroll;
