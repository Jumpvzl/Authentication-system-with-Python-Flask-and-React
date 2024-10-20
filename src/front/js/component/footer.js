import React, { Component } from "react";

//include images into your bundle
import PropTypes from "prop-types";

export const Footer = (props) => (
        <div className="container-fluid footer">
            {props.properties.map((item, index) => (
                <footer key={index} className="mt-auto py-3 text-center">
                    <p>
                        Made by{" "}
                        <a 
                            href={item.githubURL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {item.name}
                        </a>{" "}
                        on{" "}
                        <a 
                            href={item.geeksURL} 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            {item.geeksName}
                        </a>
                        <img 
                            className="imgfooter" 
                            src={item.imagenURL} 
                            alt="Logo de 4GeeksAcademy" 
                        />
                    </p>
                </footer>
            ))}
        </div>
);

Footer.propTypes = {
    properties: PropTypes.arrayOf(PropTypes.shape({  
        githubURL: PropTypes.string,
        name: PropTypes.string,
        geeksName: PropTypes.string,
        geeksURL: PropTypes.string,
        imagenURL: PropTypes.string,
}
))
};