import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components"

type EmailVerifProps = {
  email: string
  title?: string
  message: string
  fullname: string
}

const EmailContactTemplate = ({ email, title, message, fullname }: EmailVerifProps) => {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {fullname}</Preview>
      <Tailwind>
        <Body className="bg-black font-sans">
          <Container className="mx-auto py-10 px-5 max-w-150">
            <Heading className="text-white text-3xl font-bold m-0 mb-8">New Contact Form Submission</Heading>

            <Section className="my-5">
              <Text className="text-zinc-400 text-xs font-semibold uppercase tracking-wider m-0 mb-2">From:</Text>
              <Text className="text-white text-base m-0">{title}</Text>
            </Section>

            <Section className="my-5">
              <Text className="text-zinc-400 text-xs font-semibold uppercase tracking-wider m-0 mb-2">From:</Text>
              <Text className="text-white text-base m-0">{fullname}</Text>
            </Section>

            <Section className="my-5">
              <Text className="text-zinc-400 text-xs font-semibold uppercase tracking-wider m-0 mb-2">Email:</Text>
              <Text className="text-white text-base m-0">{email}</Text>
            </Section>

            <Hr className="border-zinc-800 my-8" />

            <Section className="my-5">
              <Text className="text-zinc-400 text-xs font-semibold uppercase tracking-wider m-0 mb-2">Message:</Text>
              <Text className="text-white text-base leading-6 m-0 whitespace-pre-wrap">{message}</Text>
            </Section>

            <Hr className="border-zinc-800 my-8" />

            <Text className="text-zinc-500 text-sm mt-8 m-0">
              This email was sent from your portfolio contact form.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

EmailContactTemplate.PreviewProps = {
  title: "Contact Portfolio",
  message: "Message from portfolio",
  fullname: "Test Dummies"
} as EmailVerifProps

export default EmailContactTemplate