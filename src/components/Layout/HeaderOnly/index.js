import { Header } from '~/components/Layout/components'

function HeaderOnly({children}) {
    return (
        <div>
            <Header />
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default HeaderOnly;