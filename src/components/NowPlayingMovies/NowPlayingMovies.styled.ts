import styled from 'styled-components';
import {Swiper} from "swiper/react";

export const NowPlayingCarousel = styled(Swiper)`
  width: 100%;
  height: auto;
`;
export const NowPlayingSlider = styled.div`
  text-align: center;
  width: 100%;
`;
export const NowPlayingOverview = styled.div`
  position: absolute;
  bottom: 0 ;
  padding: 10px;
  color: white;
  font-size: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
  width: 100%;
`;
export const BackImage = styled.img`
    width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
`;