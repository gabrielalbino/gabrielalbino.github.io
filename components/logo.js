import { Image, Link, styled, Text, useColorModeValue } from "@chakra-ui/react";

const LogoBox = styled.span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
  transform: rotate(20deg);
}
`

const Logo = () => {
  const image = `images/cmd${useColorModeValue('', '-dark')}`;

  return (
    <Link href="/">
      <LogoBox>
        <Image src={image} width={20} height={20}></Image>
        <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c' fontWeight="bold" ml={3}>Gabriel Albino</Text>
      </LogoBox>
    </Link>
  )
}

export default Logo;