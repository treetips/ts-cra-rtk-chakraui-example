type Status = "UP" | "DOWN";

/**
 * Response payload to health check
 * @author treetips
 */
export type HealthCheckResponsePayload = {
  status: Status;
  components: {
    db: {
      status: Status;
      details: {
        database: string;
        validationQuery: string;
      };
    };
    diskSpace: {
      status: Status;
      details: {
        total: number;
        free: number;
        threshold: number;
        exists: boolean;
      };
    };
    ping: {
      status: Status;
    };
  };
};
