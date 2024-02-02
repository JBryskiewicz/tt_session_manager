import { ERROR_MESSAGE_LIB } from "../../utils/constants";
import { ErrorPageView } from "./ErrorPageView";
import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

const { pageNotFound: notFound } = ERROR_MESSAGE_LIB;

export class CustomErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPageView errorMsg={notFound} />;
    }
    return this.props.children;
  }
}
