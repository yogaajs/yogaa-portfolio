//  Imports
// ===========================================================

// Locals
import styles from './styles.module.css';


//  Component
// ===========================================================

function MouseScroll() {
    return (
        <div className={styles.scrolldown}>
            <svg height="30" width="10">
                <circle className={styles.dot1} cx="5" cy="15" r="2" />
                <circle className={styles.dot2} cx="5" cy="15" r="2" />
            </svg>
        </div>
    )
}

export default MouseScroll;
