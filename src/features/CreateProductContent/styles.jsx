import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
  padding: 0 120px;
`;

export const SectionTitle = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding-bottom: 5px;
  color: #393939;
  border-bottom: 1px solid #dadada;
`;

export const SectionInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

export const FormSection = styled.div`
  width: 50%;
`;

export const DropzoneContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 400px;
`;

export const DropzoneTitle = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 5px;
  color: #393939;
`;

export const DropzoneInner = styled.div`
  width: 100%:
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export const DropzoneInput = styled.input`
  height: 400px;
`;

export const DropzoneText = styled.p`
  font-size: 16px;
  text-decoration: none;
  color: #dadada;
`;

export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 15px;
`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 20px;
  border: 1px solid ##eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100%;
  height: 100%;
  padding: 4px;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const ThumbImg = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isFocused) {
    return "#2196f3";
  }
  return "#eeeeee";
};
