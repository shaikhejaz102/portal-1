import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./step2.css";
const Step2 = () => {
  return (
    <div className="step-2">
      <div className="union">
        <div className="union-child" />
        <div className="union-item" />
        <Form.Check className="union-inner" type="radio" />
        <div className="ellipse-div" />
        <div className="union-child1" />
        <div className="union-child2" />
      </div>
      <div className="welcome-to-the">{`Welcome to the Journey Map, your compass to navigate through the onboarding process. Here, you'll be able to see your progress, step by step, as we embark on this exciting journey together. `}</div>
      <Button className="button" variant="outline-primary">
        Next
      </Button>
      <img className="group-icon" alt="" src="/group.svg" />
    </div>
  );
};

export default Step2;
