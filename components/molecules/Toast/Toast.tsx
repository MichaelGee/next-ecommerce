import { Div, Icon, Text } from 'atomize';

interface IToast {
    intent: string,
    message: string,
    dismissable: boolean,
}

export const Toast = (props: IToast) => {
  const {intent, message, dismissable} = props;

  const renderIntent=()=> {
      switch (intent) {
          case 'success':
              return 'Success'
          case 'info':
             return 'Info'
          case 'error':
              return 'Error'
          case 'warning':
              return 'Warning'
          default:
             return 'Info';
      }
  }

  const renderIcon=()=> {
      switch (intent) {
          case 'success':
              return <Icon name='Success' />
          case 'info':
             return <Icon name='InfoSolid' />
          case 'error':
              return <Icon name='CloseSolid' />
          case 'warning':
              return <Icon name='AlertSolid' />
          default:
             return <Icon name='InfoSolid' />
      }
  }

    return (
        <Div pos='relative' w='20rem' d='flex' rounded='5' shadow='0px 10px 30px rgb(0 0 0 / 10%)' h={{xs: '3.0rem', md: '4rem'}} >
            <Div bg='success' d='flex' p={{ x: '6px'}} flexDir='column' align='flex-start' justify='center'>
                {renderIcon()}
            </Div>
            <Div m={{l: '1rem' }} d='flex'  flexDir='column' align='flex-start' justify='center'>
                <Text tag='h1' textSize={{ xs: 'caption', md: 'body'}}>{renderIntent()}</Text>
                <Text textSize={{ xs: 'tiny', md: 'caption'}} opacity='0.7'>{message}</Text>
            </Div>
            {dismissable && <Div pos='absolute' right='13px' top='9px'>
                <Icon name='Cross' cursor='pointer' size='20px'  opacity='0.6'/>
            </Div>}
        </Div>
    )
}
