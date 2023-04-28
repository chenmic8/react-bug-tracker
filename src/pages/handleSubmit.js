import useEffect from "react";
import { useNavigate } from "react-router-dom";

export default function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target[0].value);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/editbug");
  });
}
