# podman pod stop icm && \
# podman pod rm icm && \
podman stop --all && \
podman pod stop --all && \
yes | podman system prune && \
yes | podman volume prune