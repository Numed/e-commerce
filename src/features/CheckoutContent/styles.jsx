import styled from "styled-components";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px 0;
`;

export const SectionSubtitle = styled.h4`
  width: 50%;
  font-family: "Karla";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.7px;
  color: #393939;
  margin: 20px 0 10px;
`;

export const FormSection = styled.div`
  width: 50%;
`;

export const StyledCountryDropdown = styled(CountryDropdown)`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  width: 100%;
`;

export const StyledRegionDropdown = styled(RegionDropdown)`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  min-width: 325px;
  width: 100%;
`;
