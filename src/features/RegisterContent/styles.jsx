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

export const SectionTitle = styled.h3`
  width: 50%;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  padding-bottom: 5px;
  color: #393939;
  border-bottom: 1px solid #dadada;
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
  width: 345px;
`;

export const StyledRegionDropdown = styled(RegionDropdown)`
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 3px;
  margin-right: 15px;
  padding: 10px;
  width: 345px;
`;
