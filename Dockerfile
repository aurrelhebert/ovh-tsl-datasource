FROM grafana/grafana

ADD ./ /var/lib/grafana/plugins/grafana-tsl
