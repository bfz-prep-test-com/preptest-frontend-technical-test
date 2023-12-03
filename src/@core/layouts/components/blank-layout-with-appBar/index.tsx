// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { styled, useTheme } from '@mui/material/styles'
import CustomImage from 'src/views/components/image'
import GoBackButton from 'src/components/go-back-button'

// ** Configs

const StyledLink = styled('a')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  marginRight: theme.spacing(8)
}))

interface Props {
  disableGoBackButton?: boolean
}

const BlankLayoutAppBar = ({ disableGoBackButton }: Props) => {
  // ** Hooks
  const theme = useTheme()

  return (
    <AppBar elevation={3} color='default' position='sticky'>
      <Toolbar
        sx={{
          p: theme => `${theme.spacing(0, 2)} !important`,
          minHeight: `${theme.mixins.toolbar.minHeight}px !important`
        }}
      >
        {!disableGoBackButton && <GoBackButton />}
        <Link href='/' passHref>
          <StyledLink href='/'>
            <CustomImage height={40} width={180} src={`/logos/logo-with-text-${theme.palette.mode}.svg`} alt='logo' />
          </StyledLink>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default BlankLayoutAppBar
