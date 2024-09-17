import React from 'react'
import { Text, View } from 'react-native-ui-lib'
function GettingStarted() {
  return (
    <View style={{position: 'relative', backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>GettingStarted</Text>
      {/* footer by view */}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        
      </View>

    </View>
    
  )
}

export default GettingStarted