import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-router";
import { Wrapper } from "../components/UI/Wrapper";
import { useNavigate } from "react-router";
import { createGunThunk, getGunsThunk } from "../store/gunAction";
import Spinner from "../components/UI/Spinner";

export const Create = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.gun);

  function goBack() {
    navigate("/main");
  }

  async function createGun(params) {
    dispatch(createGunThunk(params));
    goBack();
    dispatch(getGunsThunk());
  }

  return (
    <Wrapper>
      <h1>Create</h1>
      {isLoading && <Spinner />}
      {error && <p>Error</p>}
      <Form buttonText="Save" onCancel={goBack} submitForm={createGun} />
    </Wrapper>
  );
};
