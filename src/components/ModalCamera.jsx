import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Snackbar, Text } from 'react-native-paper';

export const ModalCamera = ({pickImageCamera, pickImageGalery}) => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Cambiar'}</Button>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'X',
          onPress: () => {
            // Do something
          },
        }}>
          <View style={{alignSelf: 'center'}}>
            <Button icon="camera" mode="text" onPress={pickImageCamera}>
              Abrir camara
            </Button>
            <Button icon="folder" mode="text" onPress={pickImageGalery}>
                Abrir Galeria
            </Button>
          </View>


      </Snackbar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'space-between',
  },
});
