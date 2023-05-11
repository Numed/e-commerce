import {
  SectionContainer,
  Select,
  BtnSubmit,
  ImageBlock,
  ImageBlocksInner,
  InfoDescription,
  InfoPrice,
  Input,
  CardInfo,
  CardPhotos,
  InputContainer,
  Label,
  MainPhoto,
  Option,
} from "./styles";

import mainPhoto from "../../img/Cards/card1.png";

const CardContent = () => {
  return (
    <SectionContainer>
      <CardInfo>
        <InfoPrice>$3,080.00</InfoPrice>
        <InfoDescription>
          Aenean sed ante finibus, iaculis sem nec, viverra ligula. Fusce semper
          posuere ipsum ut tincidunt. Aliquam in rutrum ligula. Aliquam ornare
          risus enim, vitae posuere neque laoreet condimentum. Proin vitae
          malesuada orci. Nullam quam ipsum, finibus ut erat sit amet, facilisis
          porta est. Quisque sollicitudin leo eu massa ornare semper. Proin sit
          amet metus vel eros rhoncus consectetur lobortis eu eros. Pellentesque
          eleifend mattis convallis.
        </InfoDescription>
        <InputContainer>
          <Label>
            Size <span>*</span>
          </Label>
          <Select>
            <Option>200x200</Option>
          </Select>
        </InputContainer>
        <InputContainer>
          <Label>Quantity</Label>
          <Input type="number" min="1" max="100" value="1" />
        </InputContainer>
        <BtnSubmit> Add to Cart</BtnSubmit>
      </CardInfo>
      <CardPhotos>
        <MainPhoto src={mainPhoto} alt="Main photo" />
        <ImageBlocksInner>
          <ImageBlock src="" alt="Card image 1" />
          <ImageBlock src="" alt="Card image 2" />
          <ImageBlock src="" alt="Card image 3" />
        </ImageBlocksInner>
      </CardPhotos>
    </SectionContainer>
  );
};

export default CardContent;
