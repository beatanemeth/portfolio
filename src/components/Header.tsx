import Container from './Container';
import ContainerWrapper from './ContainerWrapper';

export default function Header() {
  return (
    <ContainerWrapper as="header" id="headerSection" className="">
      <Container className="flex-col py-6">
        <p className="mb-0">Beata Nemeth</p>
      </Container>
    </ContainerWrapper>
  );
}
