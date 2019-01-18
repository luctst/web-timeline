/**
 * Import
 */
import React from "react";

/**
 * Déclaration
 */
const Nav = () => {
    return (
        <nav className="filter" id="js-stickyMenu">
            <div className="filter--date">
                <h3 className="is__subTitle">Date</h3>
            </div>
            <div className="filter--cat">
                <select className="is__select">
                    <option value="">Category</option>
                    <option value="Network">Network</option>
                    <option value="Launch">Launch</option>
                    <option value="Science">Science</option>
                    <option value="Security">Security</option>
                    <option value="Programming">Programming</option>
                    <option value="Ai">AI</option>
                    <option value="Social Media">Social Media</option>
                    <option value="design">Design</option>
                </select>
            </div>
            <div className="filter--title">
                <h3 className="is__subTitle">Title</h3>
            </div>
        </nav>
    );
}

/**
 * Export
 */
export default Nav;