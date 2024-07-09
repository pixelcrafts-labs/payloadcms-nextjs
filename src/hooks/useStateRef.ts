import {
	useState,
	useRef,
	useCallback,
	Dispatch,
	SetStateAction,
	RefObject,
} from "react";

function useStateRef<T>(
	initialValue: T
): [T, Dispatch<SetStateAction<T>>, RefObject<T>] {
	const [state, setState] = useState<T>(initialValue);
	const ref = useRef<T>(state);

	const setRefState = useCallback((value: SetStateAction<T>) => {
		ref.current =
			typeof value === "function"
				? (value as (prevState: T) => T)(ref.current)
				: value;
		setState(value);
	}, []);

	return [state, setRefState, ref];
}

export default useStateRef;
