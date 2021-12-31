import { useState } from "react";
import { MdDownloadDone, MdFreeCancellation } from "react-icons/md";
import styled from "styled-components";

const Done = ({ done }) => {
  const [complete, setComplete] = useState(done);

  const handleComplete = () => {
    setComplete(!complete);
  };
  return (
    <Container>
      {complete ? (
        <IconHolder onClick={handleComplete} cl="green">
          <MdDownloadDone />
        </IconHolder>
      ) : (
        <IconHolder onClick={handleComplete} cl="red">
          <MdFreeCancellation />
        </IconHolder>
      )}
    </Container>
  );
};

export default Done;
// const Container = styled.div``;
const IconHolder = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ cl }) => cl};
`;

const Container = styled.div``;
