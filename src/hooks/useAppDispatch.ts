import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

/**
 * Hooks for redux toolkit
 * @author treetips
 */
export const useAppDispatch = () => {
  const dispatch = useDispatch<AppDispatch>();

  return {
    dispatch,
  } as const;
};
