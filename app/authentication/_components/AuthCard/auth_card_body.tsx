import AuthCardBodyHeader from "./auth_card_body_header"

type TAuthCardBodyProps = {
    children: React.ReactNode,
}

const AuthCardBody = ({
    children
}: TAuthCardBodyProps) => (
    <div className="card-body gap-10">
        { children }
    </div>
)

AuthCardBody.Header = AuthCardBodyHeader

export default AuthCardBody