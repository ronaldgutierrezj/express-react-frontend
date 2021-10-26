import { Title, Card, FlexContainer, StyledImage, Button } from "./Styles";

function App() {
  return (
    <div className="App">
      <Title>Hello World</Title>
      <FlexContainer>
        <Card>
          <Title>Card 1</Title>
          <StyledImage src="https://www.wppl.org/sites/default/files/content/events/puppiesandpie_0.jpg"></StyledImage>
          <Button>Button</Button>
        </Card>
        <Card>
          <Title>Card 2</Title>
          <StyledImage src="https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_22/3479356/210601-main-pups-canine-companions-for-independence-ew-113p.jpg"></StyledImage>
          <Button>Button</Button>
        </Card>
        <Card>
          <Title>Card 3</Title>
          <StyledImage src="https://i.pinimg.com/736x/f2/1f/6e/f21f6e5c287b64ed2c2692cdeda87894.jpg"></StyledImage>
          <Button>Button</Button>
        </Card>
      </FlexContainer>
    </div>
  );
}

export default App;