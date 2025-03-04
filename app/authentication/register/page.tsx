import Link from 'next/link'

import FormCard from "../../../components/FormCard";
import RegisterForm from '../../../containers/authentication/RegisterForm';

const handler = () => (
    <FormCard>
        <FormCard.Header>
            <FormCard.Header.Title>Create an account</FormCard.Header.Title>
            <FormCard.Header.Subtitle>
                Already have an account? <Link className="link-primary" href="/authentication/login">Log in</Link>
            </FormCard.Header.Subtitle>
        </FormCard.Header>
        <FormCard.Body>
            <RegisterForm />
        </FormCard.Body>
    </FormCard>
)

export default handler;