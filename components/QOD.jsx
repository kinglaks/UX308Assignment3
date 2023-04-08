import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function(){
    const surveyJson = {
        elements: [{
          name: "FirstName",
          title: "Enter your first name:",
          type: "text"
        }, {
          name: "LastName",
          title: "Enter your last name:",
          type: "text"
        },{
            "type": "boolean",
            "name": "radiobutton",
            "title": "Will you be able to attend Richard Hildreds exam on the 14th?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          },
        {
            "type": "boolean",
            "name": "slider",
            "title": "Are you fully vaccinated? (3 shots)",
            "description": "Display mode = Default",
            "valueTrue": "Yes",
            "valueFalse": "No"
          }, {
            "type": "boolean",
            "name": "radiobutton",
            "title": "Have you been feeling any COVID-19 symptoms?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "slider",
            "title": "Do you have any feelings of throwing up?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "radiobutton",
            "title": "Have you been feeling faintish?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "radiobutton",
            "title": "Have you been to the emergency room?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "radiobutton",
            "title": "Will you be able to provide your medical records?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "slider",
            "title": "Are you able to perform normal everyday tasks?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "radiobutton",
            "title": "Have you had any constipation?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "slider",
            "title": "Has your day been well Rich?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }, {
            "type": "boolean",
            "name": "slider",
            "title": "Do you think Lakshan is a great student?",
            "description": "Display mode = Radio",
            "valueTrue": "Yes",
            "valueFalse": "No",
            "renderAs": "radio"
          }
        ]
      };

      const survey = new Model(surveyJson);

      return <Survey model={survey} />;
}