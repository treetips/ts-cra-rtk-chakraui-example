/**
 * Api error response type
 * @author treetips
 */
export type ApiErrorResponsePayload = {
  timestamp?: Date;
  message?: string;
  details?: [
    {
      title: string;
      description: string;
    }
  ];
};
