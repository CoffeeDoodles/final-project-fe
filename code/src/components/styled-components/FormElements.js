import styled from "styled-components/macro";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.h1`
  font-weight: 300;
  font-size: 35px;
  margin-top: 15px;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 10px;
  border: 3px dotted #50b9cd;
  box-sizing: border-box;
  background-color: white;
  padding: 15px;
  width: 100%;
  height: 200px;
`;

export const InputField = styled.input`
  border-radius: 10px;
  width: 100%;
  margin: 15px 0;
  box-sizing: border-box;
  border: 2px solid #50b9cd;
  background-color: white;
  padding: 15px;
`;

export const Form = styled.form`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 3px solid white;
  border-radius: 20px;
  align-items: center;
  margin: 60px auto;
  padding: 10px;
  background-color: #54b0c1;
  @media (min-width: 768px) {
    max-width: 650px;
    margin: 150px auto;
  }
`;
export const InputWrapper = styled.div`
  text-align: left;
  margin: 0 auto;
`;

export const Label = styled.label`
  font-weight: 300;
  margin-bottom: 10px;
  margin-right: 16px;
`;

export const SecondaryButtonContainer = styled.div`
  width: 90%;
  margin-top: 15px;
  text-align: center;
`;

export const Text = styled.p`
  font-weight: 300;
  margin-top: 15px;
`;

export const ButtonContainer = styled.div`
  width: 90%;
  margin-bottom: 40px;
  text-align: center;
`;

export const PrimaryButton = styled.button`
  border-radius: 10px;
  font-size: 20px;
  font-weight: 200;
  width: 50%;
  margin: 10px 0 10px 0;
  padding: 10px 20px;
  border: 3px solid white;
  background-color: #8fe0ef;
  &:hover {
    background-color: #d1f8ff;
  }
  cursor: pointer;
`;

export const SecondaryButton = styled.button`
  border-radius: 10px;
  font-size: 20px;
  font-weight: 200;
  width: 50%;
  margin-bottom: 30px;
  padding: 10px 20px;
  border: 3px solid white;
  background-color: #8fe0ef;
  &:hover {
    background-color: #d1f8ff;
  }
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  border: 1px solid red;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 300;
  width: fit-content;
  padding: 10px;
  border: 2px solid rgb(123, 104, 238);
`;

export const Wrapper = styled.div`
  height: auto;
  width: 100%;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
`;
// styled radio? stretch goal?
export const RadioButton = styled.input`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
