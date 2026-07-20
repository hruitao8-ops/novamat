"use client";

import React, { useId } from 'react';
import styled, { css, keyframes } from 'styled-components';

/* ───── 共享类型 ───── */

export interface GlassRadioOption {
  value: string;
  label: string;
  color: string;
  glow: string;
  innerShadow: string;
}

export interface MembershipTier extends GlassRadioOption {
  price: string;
  description: string;
  badge?: string;
}

/* ───── Props ───── */

interface GlassRadioGroupProps {
  variant?: 'horizontal' | 'membership';
  compact?: boolean;                    // compact 模式：适配窄侧边栏
  options?: GlassRadioOption[];         // horizontal 模式
  membershipTiers?: MembershipTier[];    // membership 模式
  value?: string;
  onChange?: (value: string) => void;
  name?: string;
}

/* ───── 默认数据 ───── */

const defaultOptions: GlassRadioOption[] = [
  {
    value: 'silver',
    label: 'Silver',
    color: 'linear-gradient(135deg, #c0c0c055, #e0e0e0)',
    glow: '0 0 18px rgba(192, 192, 192, 0.5), 0 0 10px rgba(255, 255, 255, 0.4) inset',
    innerShadow: '0 0 10px rgba(255, 255, 255, 0.4) inset',
  },
  {
    value: 'gold',
    label: 'Gold',
    color: 'linear-gradient(135deg, #ffd70055, #ffcc00)',
    glow: '0 0 18px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 235, 150, 0.4) inset',
    innerShadow: '0 0 10px rgba(255, 235, 150, 0.4) inset',
  },
  {
    value: 'platinum',
    label: 'Platinum',
    color: 'linear-gradient(135deg, #d0e7ff55, #a0d8ff)',
    glow: '0 0 18px rgba(160, 216, 255, 0.5), 0 0 10px rgba(200, 240, 255, 0.4) inset',
    innerShadow: '0 0 10px rgba(200, 240, 255, 0.4) inset',
  },
];

/* ───── Horizontal Compact 样式（适配窄侧边栏）───── */

const StyledCompactHorizontalWrapper = styled.div`
  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;

    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 0.7rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: 100%;
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    font-size: 11.5px;
    padding: 0.45rem 0.5rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.2px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
    user-select: none;
    white-space: nowrap;
  }

  .glass-radio-group label:hover {
    color: white;
  }

  .glass-radio-group input:checked + label {
    color: #fff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 0.7rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out,
      width 0.4s ease-in-out;
  }
`;

/* ───── Horizontal 样式 ───── */

const StyledHorizontalWrapper = styled.div`
  .glass-radio-group {
    --bg: rgba(255, 255, 255, 0.06);
    --text: #e5e5e5;

    display: flex;
    position: relative;
    background: var(--bg);
    border-radius: 1rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow:
      inset 1px 1px 4px rgba(255, 255, 255, 0.2),
      inset -1px -1px 6px rgba(0, 0, 0, 0.3),
      0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    width: fit-content;
  }

  .glass-radio-group input {
    display: none;
  }

  .glass-radio-group label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 72px;
    font-size: 13px;
    padding: 0.65rem 1.2rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
    user-select: none;
    white-space: nowrap;
  }

  .glass-radio-group label:hover {
    color: white;
  }

  .glass-radio-group input:checked + label {
    color: #fff;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: 1rem;
    z-index: 1;
    transition:
      transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56),
      background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out,
      width 0.4s ease-in-out;
  }
`;

/* ───── Membership 样式 ───── */

const StyledMembershipWrapper = styled.div`
  .membership-group {
    --bg: rgba(255, 255, 255, 0.04);
    --text: #c0c0c0;
    --text-active: #ffffff;

    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;
  }

  .membership-group input {
    display: none;
  }

  .membership-card {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.37, 1.95, 0.66, 0.56);
    z-index: 2;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .membership-card:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .membership-card__indicator {
    width: 14px;
    height: 14px;
    min-width: 14px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
    position: relative;
    transition: all 0.35s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .membership-card__indicator::after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: transparent;
    transition: all 0.35s cubic-bezier(0.37, 1.95, 0.66, 0.56);
  }

  .membership-card__info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex: 1;
    min-width: 0;
  }

  .membership-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }

  .membership-card__name {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
    letter-spacing: 0.2px;
    transition: color 0.3s ease;
    line-height: 1.2;
  }

  .membership-card__price {
    font-size: 12px;
    font-weight: 700;
    color: var(--text);
    opacity: 0.7;
    transition: all 0.3s ease;
    white-space: nowrap;
  }

  .membership-card__desc {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.35);
    line-height: 1.3;
    transition: color 0.3s ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .membership-card__badge {
    position: absolute;
    top: -5px;
    right: 8px;
    font-size: 9px;
    font-weight: 700;
    padding: 1px 6px;
    border-radius: 4px;
    color: #000;
    background: linear-gradient(135deg, #a78bfa, #818cf8);
    opacity: 0;
    transform: scale(0.7);
    transition: all 0.35s cubic-bezier(0.37, 1.95, 0.66, 0.56);
    pointer-events: none;
  }

  /* ── 选中状态 ── */

  .membership-group input:checked + .membership-card {
    border-color: rgba(255, 255, 255, 0.12);
  }

  .membership-group input:checked + .membership-card .membership-card__indicator {
    border-color: transparent;
    box-shadow: 0 0 8px rgba(255, 255, 255, 0.2);
  }

  .membership-group input:checked + .membership-card .membership-card__indicator::after {
    background: #fff;
  }

  .membership-group input:checked + .membership-card .membership-card__name {
    color: var(--text-active);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  }

  .membership-group input:checked + .membership-card .membership-card__price {
    color: var(--text-active);
    opacity: 1;
  }

  .membership-group input:checked + .membership-card .membership-card__desc {
    color: rgba(255, 255, 255, 0.55);
  }

  .membership-group input:checked + .membership-card .membership-card__badge {
    opacity: 1;
    transform: scale(1);
  }
`;

/* ───── 组件 ───── */

export function GlassRadioGroup({
  variant = 'horizontal',
  compact = false,
  options = defaultOptions,
  membershipTiers,
  value,
  onChange,
  name,
}: GlassRadioGroupProps) {
  const uniqueId = useId();
  const radioName = name || `glass-${uniqueId}`;

  /* ── Horizontal 模式 ── */
  if (variant === 'horizontal') {
    const Wrapper = compact ? StyledCompactHorizontalWrapper : StyledHorizontalWrapper;
    const activeIndex = options.findIndex((o) => o.value === value);

    const gliderStyles: React.CSSProperties = {
      width: `${100 / options.length}%`,
      transform: `translateX(${(activeIndex >= 0 ? activeIndex : 0) * 100}%)`,
      background: options[activeIndex >= 0 ? activeIndex : 0]?.color,
      boxShadow: options[activeIndex >= 0 ? activeIndex : 0]?.glow,
    };

    return (
      <Wrapper>
        <div className="glass-radio-group">
          {options.map((option, index) => (
            <React.Fragment key={option.value}>
              <input
                type="radio"
                name={radioName}
                id={`${radioName}-${option.value}`}
                value={option.value}
                checked={value === option.value || (!value && index === 0)}
                onChange={() => onChange?.(option.value)}
              />
              <label htmlFor={`${radioName}-${option.value}`}>{option.label}</label>
            </React.Fragment>
          ))}
          <div className="glass-glider" style={gliderStyles} />
        </div>
      </Wrapper>
    );
  }

  /* ── Membership 模式 ── */
  const tiers = membershipTiers || [];
  const activeTier = tiers.find((t) => t.value === value) || tiers[0];

  return (
    <StyledMembershipWrapper>
      <div className="membership-group">
        {tiers.map((tier) => {
          const isActive = value === tier.value;
          return (
            <React.Fragment key={tier.value}>
              <input
                type="radio"
                name={radioName}
                id={`${radioName}-${tier.value}`}
                value={tier.value}
                checked={isActive || (!value && tier === tiers[0])}
                onChange={() => onChange?.(tier.value)}
              />
              <label
                htmlFor={`${radioName}-${tier.value}`}
                className="membership-card"
                style={isActive || (!value && tier === tiers[0]) ? {
                  background: `linear-gradient(135deg, rgba(255,255,255,0.08), ${tier.color})`,
                  boxShadow: tier.glow,
                } : undefined}
              >
                <span className="membership-card__indicator" />
                <div className="membership-card__info">
                  <div className="membership-card__header">
                    <span className="membership-card__name">{tier.label}</span>
                    <span className="membership-card__price">{tier.price}</span>
                  </div>
                  <span className="membership-card__desc">{tier.description}</span>
                </div>
                {tier.badge && <span className="membership-card__badge">{tier.badge}</span>}
              </label>
            </React.Fragment>
          );
        })}
      </div>
    </StyledMembershipWrapper>
  );
}

export default GlassRadioGroup;
