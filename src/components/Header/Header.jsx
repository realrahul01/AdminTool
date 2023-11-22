import styles from './Header.module.css'

const Header=()=>{
    return(
        <div className={styles.navbar}>
            <div className="left-navbar">
                <h1>Logo</h1>
            </div>
            <div className={styles.rightNavbar}>
                <ul>
                    <li>Dashboad</li>
                    <li>Gudeline</li>
                    <li>Instruction</li>
                    <li>Groups</li>
                    <li>userprofile</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;