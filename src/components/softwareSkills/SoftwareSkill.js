import React from "react";
import "./SoftwareSkill.css";
import { skillsSection } from "../../portfolio";


export default function SoftwareSkill(props) {
  console.log(props);
  if(props.skillType === 1){
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {skillsSection.softwareSkills.map(skills => {
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <i className={skills.fontAwesomeClassname}></i>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  if(props.skillType === 2){
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {skillsSection.graphicSkills.map(skills => {
              return (
                <li className="software-skill-inline" name={skills.skillName}>
                  <img src={require('../../assets/adobe/'+ skills.skillName + '.png')} alt="" className="icon"></img>
                  <p>{skills.skillName}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
  
}
