import { useEffect, useState } from "react";
import { Input } from "./Input";
import styled from "styled-components";
import { Button } from "../Button";
import { useNavigate } from "react-router";

export const Form = (props) => {
  const { buttonText, onCancel, submitForm, initialData } = props;
  const navigate = useNavigate();

  const [data, setData] = useState({
    gun: "",
    color: "",
    aim: "",
    magazine: 0,
  });

  function dataValueHandler(e) {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  useEffect(() => {
    if (initialData) {
      setData(initialData);
    }
  }, [initialData]);

  function onSubmit(e) {
    e.preventDefault();
    submitForm(data);
    setData({
      gun: "",
      color: "",
      aim: "",
      magazine: 0,
    });
    navigate("/main");
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        placeholder="Gun"
        value={data.gun}
        name="gun"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="Color"
        value={data.color}
        name="color"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="Aim"
        value={data.aim}
        name="aim"
        onChange={dataValueHandler}
      />
      <Input
        placeholder="Magazine"
        value={data.magazine}
        name="magazine"
        onChange={dataValueHandler}
      />
      <ButtonWrapper>
        <Button variant="primary" type="submit">
          {buttonText}
        </Button>
        <Button
          variant="danger"
          type="button"
          onClick={onCancel || (() => navigate("/main"))}
        >
          Cancel
        </Button>
      </ButtonWrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  max-width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;

  padding: 15px;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  width: 50%;
`;
