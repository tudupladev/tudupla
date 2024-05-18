import { Typography } from '@mui/material';
import {
  BoxContainer,
  CardContainer,
  CardContentStyled,
  CardMediaStyled,
} from './ServiceCard.styles';
import { ServiceCardProps } from './types';

export const ServiceCard = ({ title, image }: ServiceCardProps) => {
  return (
    <CardContainer>
      <CardMediaStyled image={image} title={title} />
      <BoxContainer>
        <CardContentStyled style={{ paddingBottom: '0' }}>
          <Typography gutterBottom variant="h5" component="div" mb={0}>
            {title}
          </Typography>
        </CardContentStyled>
      </BoxContainer>
    </CardContainer>
  );
};

export default ServiceCard;
