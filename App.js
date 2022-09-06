import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
	const [name, setName] = useState('aditya');
	const updateName = () => {
		setName('Rahul');
	};

	return (
		<View style={styles.container}>
			<Text>Naming lorem ipsum: {name}</Text>

			<TextInput
				style={styles.input}
				placeholder="Enter name"
				onChangeText={(e) => {
					setName(e);
				}}
			></TextInput>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	header: {
		backgroundColor: 'pink',
		padding: 20
	},
	input: {
		borderWidth: 1,
		width: '50%',
		borderColor: '#777',
		padding: 8,
		margin: 10
	}
});
