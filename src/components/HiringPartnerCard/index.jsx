import React, { memo, useState } from 'react';
import {
  Container,
  Touchable,
  HeaderContainer,
  LogoSkeleton,
  Logo,
  HeaderSubContainer,
  Title,
  LocationContainer,
  LocationIcon,
  LocationLabel,
  Description
} from './styles';

export const HiringPartnerCard = memo(({ company, onPress, ...rest }) => {
  const [loadingLogo, setLoadingLogo] = useState(true);

  return (
    <Container {...rest}>
      <Touchable onPress={onPress}>
        <HeaderContainer>
          {loadingLogo && (
            <LogoSkeleton
              height={60}
              width={60}
            />
          )}
          <Logo
            source={company.logo ? { uri: company.logo } : require('../../assets/companyLogo.webp')}
            onLoad={() => setLoadingLogo(false)}
          />
          <HeaderSubContainer>
            <Title variant="titleLarge">{company.name}</Title>
            {company.location && (
              <LocationContainer>
                <LocationIcon name="location-pin" />
                <LocationLabel>{company.location.city} / {company.location.federative_unit}</LocationLabel>
              </LocationContainer>
            )}
          </HeaderSubContainer>
        </HeaderContainer>
        <Description numberOfLines={3}>{company.description}</Description>
      </Touchable>
    </Container>
  );
}, () => true);
