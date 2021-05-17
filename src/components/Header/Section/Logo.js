import logo from '../../../assets/svg/logos/eshop.png';

const Logo = () => (
    <div className="navbar-brand-wrapper justify-content-between">
        <a className="navbar-brand" href="/" aria-label="Front">
            <img className="navbar-brand-logo" src={logo} alt="Logo" />
            <img className="navbar-brand-logo-mini" src={logo} alt="Logo" />
        </a>

        <button
            type="button"
            className="js-navbar-vertical-aside-toggle-invoker navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark"
        >
            <i className="tio-clear tio-lg" />
        </button>
    </div>
);

export default Logo;
